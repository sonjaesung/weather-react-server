var express = require("express");
var router = express.Router();
var loginController = require("../controller/login");

router.post("/", loginController.login);

module.exports = router;
