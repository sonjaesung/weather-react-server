var express = require("express");
var router = express.Router();
var userController = require("../controllers/user");

router.post("/", userController.resetPw);

module.exports = router;
