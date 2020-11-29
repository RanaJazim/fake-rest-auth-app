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
  if (db.isUserExists(credentials.email)) {
    return res
      .status(400)
      .send("Try different email.This email already exists");
  }

  const user = db.register(
    credentials.name,
    credentials.email,
    credentials.password
  );
  res.send(user);
});

router.post("/login", (req, res) => {
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
