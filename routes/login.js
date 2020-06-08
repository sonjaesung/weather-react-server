var express = require("express");
var router = express.Router();
var userController = require("../controllers/user");
var auth = require('../controllers/authorization');

router.get("/", auth.verifyToken, userController.get);
router.post("/", userController.login);

module.exports = router;
