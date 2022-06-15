const isAuthed = (req, res, next) => {
  if (typeof req.session.access_token !== "undefined") {
    next();
    return;
  }
  res.redirect("/auth/login");
};
module.exports = { isAuthed };
