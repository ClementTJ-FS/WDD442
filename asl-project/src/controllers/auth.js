const express = require("express"),
  router = express.Router(),
  request = require("request");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

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
      res.redirect("/");
    }
  );
});

module.exports = router;
