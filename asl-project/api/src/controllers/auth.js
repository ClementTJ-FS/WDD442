const express = require('express'),
  router = express.Router(),
  request = require('request'),
  { LoginToken } = require('../models/index');

require('dotenv').config();

// GET login
router.get('/login', (req, res) => {
  res.render('auth/login');
});

//callback for github login
router.get('/callback', async (req, res) => {
  const { code } = req.query;
  await request(
    {
      uri: 'https://github.com/login/oauth/access_token',
      qs: {
        client_id: process.env.GIT_CLIENT_ID,
        client_secret: process.env.GIT_CLIENT_SECRET,
        code,
      },
      headers: {
        accept: 'application/json',
      },
    },
    async (err, response, body) => {
      // parse the body of the response for the access_token
      const { access_token } = JSON.parse(body);

      // seperate the routes for the api and the frontend. - API uses session, frontend adds token into db.
      // prevents the user from logging in to both the api and the frontend at the same time.

      // //if refferer is localhost:3000, redirect to / on api
      // if (req.headers.referer === 'http://localhost:3000/') {
      //   //set the access_token in the session
      //   req.session.access_token = access_token;
      //   res.redirect('/');
      // } else {
      //add the access_token to the database
      await LoginToken.create({ token: access_token });
      //redirect to the frontend home page
      res.redirect(`https://quiz-app-tjc.herokuapp.com/?token=${access_token}`);
      // }
    }
  );
});

//check db for token.
router.get('/token', async (req, res) => {
  //find the token in the db
  const token = await LoginToken.findOne({
    where: {
      token: req.headers.token,
    },
  });
  //set the token in the session, respond with the token as a json object
  if (token) {
    req.session.access_token = req.headers.token;
    res.json(token);
  } else {
    res.json({ token: false });
  }
});

//logout. - if use is coming from API, remove the token from the session. - if user is coming from frontend, remove the token from the db.
router.get('/logout', async (req, res) => {
  //redirect to the home page
  if (req.headers.referer === 'http://localhost:3000/quizzes') {
    // clear the session if it exists. Redirect to the home page.
    if (req.session) {
      req.session.destroy(() => {});
      res.redirect('/');
    }
  } else {
    //clear the token from db if it exists. Redirect to the home page.
    if (typeof req.headers.token !== 'undefined') {
      await LoginToken.destroy({
        where: {
          token: req.headers.token,
        },
      });
    }
    res.redirect('/');
  }
});

module.exports = router;
