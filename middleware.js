module.exports = {
  authenticate,
};

function authenticate(req, res, next) {
  console.log(req.session);
  if (req.session.loggedIn === true) {
    next();
  } else {
    res.status(401).json({ message: "You shall not pass!" });
  }
}
