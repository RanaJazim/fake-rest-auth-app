const express = require("express");
const userController = require("../controllers/userController");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/users", isAuthenticated, userController.users);
router.get("/me", isAuthenticated, userController.me);

module.exports = router;
