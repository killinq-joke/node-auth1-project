const router = require("express").Router();
const md = require("./user-model");

router.get("/", (req, res) => {
  md.findAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err.message });
    });
});

module.exports = router;
