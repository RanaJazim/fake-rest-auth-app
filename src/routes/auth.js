const express = require("express");
const {
  EmailNotFound,
  PasswordNotMatched,
} = require("../exceptions/validation_exception");
const db = require("../fake_data/users");

const router = express.Router();

router.get("/users", (req, res) => {
  res.send(db.users);
});

router.post("/register", (req, res) => {
  const credentials = req.body;
  try {
    const user = db.login(credentials.email, credentials.password);
    res.send(user);
  } catch (err) {
    if (err instanceof EmailNotFound) res.status(400).send(err.message);
    else if (err instanceof PasswordNotMatched)
      res.status(400).send(err.message);
  }
});

module.exports = router;
