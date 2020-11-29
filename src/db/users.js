const jwt = require("jsonwebtoken");
const excep = require("../exceptions/validation_exception");

let lastUserId = 3;

const users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@gmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@gmail.com",
    password: "password",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@gmail.com",
    password: "password",
  },
];

function isUserExists(email) {
  const user = users.find((user) => user.email === email);
  return user ? true : false;
}

function getUser(id) {
  return users.find((user) => user.id === id);
}

function getUsers() {
  return users.map((user) => {
    return { id: user.id, name: user.name, email: user.email };
  });
}

function register(name, email, password) {
  if (isUserExists(email))
    throw new excep.EmailAlreadyExists(
      "Try different email.This email already exists"
    );

  const user = { id: ++lastUserId, name, email, password };
  users.push(user);
  return user;
}

function login(email, password) {
  const user = users.find((user) => user.email === email);
  if (!user)
    throw new excep.EmailNotFound(
      `Please enter valid email. This ${email} is not found in the database`
    );

  if (user.password !== password)
    throw new excep.PasswordNotMatched("Plese enter correct password");

  const token = jwt.sign({ id: user.id, email: user.email }, "secret-key");
  user.token = token;
  return user;
}

module.exports = {
  register,
  login,
  getUser,
  getUsers,
  users,
};
