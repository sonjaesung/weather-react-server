var express = require("express");
var router = express.Router();
var englishController = require("../controllers/todayEnglish");
var auth = require('../controllers/authorization');

router.get("/", /*auth.verifyToken,*/ englishController.get);
router.post("/", auth.verifyToken, englishController.add);

module.exports = router;
