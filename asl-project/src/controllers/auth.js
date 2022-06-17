const express = require("express"),
  router = express.Router(),
  request = require("request"),
  { LoginToken } = require("../models/index");

// GET login
router.get("/login", (req, res) => {
  res.render("auth/login");
});

//callback for github login
router.get("/callback", async (req, res) => {
  const { code } = req.query;
  await request(
    {
      uri: "https://github.com/login/oauth/access_token",
      qs: {
        client_id: "e3ebfea3a5e32f5169e1",
        client_secret: "82da6bf8f2b22f939add1d1c9418072a6c2b33b6",
        code,
      },
      headers: {
        accept: "application/json",
      },
    },
    async (err, response, body) => {
      const { access_token } = JSON.parse(body);
      req.session.access_token = access_token;
      const loginToken = await LoginToken.create({ token: access_token });
      res.redirect("http://localhost:4000?token=" + access_token);
    }
  );
});

//check db for token.
router.get("/token", async (req, res) => {
  const token = await LoginToken.findOne({
    where: {
      token: req.headers.token,
    },
  });
  if (token) {
    req.session.access_token = req.headers.token;
    res.json(token);
  } else {
    res.json({ token: false });
  }
});

//logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("http://localhost:4000");
});

module.exports = router;
