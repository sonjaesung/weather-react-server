var express = require("express");
var router = express.Router();
var englishController = require("../controllers/todayEnglish");
var auth = require('../controllers/authorization');

router.get("/", englishController.get);
router.post("/", englishController.add);

module.exports = router;
