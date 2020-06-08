var express = require("express");
var router = express.Router();
var weatherController = require("../controllers/weather");
var auth = require('../controllers/authorization');

router.get("/", auth.verifyToken, weatherController.get);

module.exports = router;
