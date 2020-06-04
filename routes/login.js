var express = require("express");
var router = express.Router();
var userController = require("../controllers/user");
const { verifyToken } = require('../controllers/authorization');

router.post("/", userController.login);

module.exports = router;
