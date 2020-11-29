const jwt = require("jsonwebtoken");
const {
  EmailNotFound,
  PasswordNotMatched,
} = require("../exceptions/validation_exception");

let lastUserId = 3;

const users = [
  {
    id: 1,
    name: "Jazim Abbas",
    email: "jazimabbas@gmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "Illiyas",
    email: "illiyas@gmail.com",
    password: "password",
  },
  {
    id: 3,
    name: "Noor",
    email: "noor@gmail.com",
    password: "password",
  },
];

function isUserExists(email) {
  const user = users.find((user) => user.email === email);
  return user ? true : false;
}

function register(name, email, password) {
  const user = { id: ++lastUserId, name, email, password };
  users.push(user);
  return user;
}

function login(email, password) {
  const user = users.find((user) => user.email === email);
  if (!user)
    throw new EmailNotFound(
      `Please enter valid email. This ${email} is not found in the database`
    );

  if (user.password !== password)
    throw new PasswordNotMatched("Plese enter correct password");

  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    "secret-key"
  );
  user.token = token;
  return user;
}

module.exports = {
  register,
  login,
  isUserExists,
  users,
};
