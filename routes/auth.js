const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authcontroller");

// @route    POST api/auth/register
// @desc     Register user
router.post("/register", register);

// @route    POST api/auth/login
// @desc     Authenticate user and get token
router.post("/login", login);

module.exports = router;
