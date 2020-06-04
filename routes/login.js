var express = require("express");
var router = express.Router();
var userController = require("../controllers/user");

router.post("/", userController.login);

module.exports = router;
