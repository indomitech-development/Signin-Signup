const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { SignUp } = require("../controller/auth");

router.post("/register", SignUp);

module.exports = router;
