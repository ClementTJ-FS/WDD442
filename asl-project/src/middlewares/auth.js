const { LoginToken } = require("../models/index");

const isAuthed = async (req, res, next) => {
  if (typeof req.headers.token !== "undefined") {
    const token = await LoginToken.findOne({
      where: { token: req.headers.token },
    });
    if (token) {
      next();
      return;
    }
  }
  if (typeof req.session.access_token !== "undefined") {
    next();
    return;
  }
  res.redirect("/auth/login");
};
module.exports = { isAuthed };
