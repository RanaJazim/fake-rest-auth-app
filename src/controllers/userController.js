const {
  EmailNotFound,
  PasswordNotMatched,
} = require("../exceptions/validation_exception");
const db = require("../fake_data/users");
const schema = require("../validation/user");
const validate = require("../validation/validate");

exports.users = function (req, res) {
  res.send(db.users);
};

exports.register = function (req, res) {
  const credentials = req.body;

  const { error } = validate(schema.userRegister, credentials);
  if (error) return res.status(422).send(error.details);

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
};

exports.login = function (req, res) {
  const credentials = req.body;

  const { error } = validate(schema.userLogin, credentials);
  if (error) return res.status(422).send(error.details);

  try {
    const user = db.login(credentials.email, credentials.password);
    res.send(user.token);
  } catch (err) {
    if (err instanceof EmailNotFound) res.status(400).send(err.message);
    else if (err instanceof PasswordNotMatched)
      res.status(400).send(err.message);
  }
};
