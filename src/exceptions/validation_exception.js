const { param } = require("../routes/auth");

class EmailNotFound extends Error {
  constructor(...params) {
    super(...params);
  }
}

class PasswordNotMatched extends Error {
  constructor(...params) {
    super(...params);
  }
}

class EmailAlreadyExists extends Error {
  constructor(...params) {
    super(...params);
  }
}

module.exports = {
  EmailNotFound,
  PasswordNotMatched,
  EmailAlreadyExists
};
