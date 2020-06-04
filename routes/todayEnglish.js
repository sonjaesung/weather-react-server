var express = require("express");
var router = express.Router();
var englishController = require("../controllers/todayEnglish");
var auth = require('../controllers/authorization');

router.post("/", auth.verifyToken, englishController.add);

module.exports = router;
