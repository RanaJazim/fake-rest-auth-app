const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.headers["x-auth-token"] || req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    const decoded = jwt.verify(token, config.get("app.secret"));
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Invalid token.");
  }
};
