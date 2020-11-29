const excep = require("../exceptions/validation_exception");
const db = require("../db/users");
const schema = require("../validation/user");
const validate = require("../validation/validate");

exports.users = function (req, res) {
  res.send(db.getUsers());
};

exports.me = function (req, res) {
  const user = db.getUser(req.user.id);
  res.send(user);
};

exports.register = function (req, res) {
  const credentials = req.body;

  const { error } = validate(schema.userRegister, credentials);
  if (error) return res.status(422).send(error.details);

  try {
    const user = db.register(
      credentials.name,
      credentials.email,
      credentials.password
    );
    res.send({ message: "Succesfully created the user" });
  } catch (err) {
    if (err instanceof excep.EmailAlreadyExists)
      res.status(400).send(err.message);
  }
};

exports.login = function (req, res) {
  const credentials = req.body;

  const { error } = validate(schema.userLogin, credentials);
  if (error) return res.status(422).send(error.details);

  try {
    const user = db.login(credentials.email, credentials.password);
    res.send(user.token);
  } catch (err) {
    if (err instanceof excep.EmailNotFound) res.status(400).send(err.message);
    else if (err instanceof excep.PasswordNotMatched)
      res.status(400).send(err.message);
  }
};
