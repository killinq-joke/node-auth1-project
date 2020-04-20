const router = require("express").Router();
const md = require("../users/user-model");

const bc = require("bcryptjs");

router.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  const salt = Number(process.env.SALT);
  const hash = bc.hashSync(password, salt);
  md.add({ username, password: hash })
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err.message });
    });
});

router.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  md.findBy({ username })
    .then((user) => {
      if (user && bc.compareSync(password, user[0].password)) {
        res.status(200).json({ message: "Logged in" });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err.message });
    });
});

module.exports = router;
