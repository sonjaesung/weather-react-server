var express = require("express");
var router = express.Router();
var englishController = require("../controllers/todayEnglish");
var auth = require('../controllers/authorization');

router.get("/", auth.verifyToken, englishController.get);
router.post("/",auth.verifyTokenPost, englishController.add);
router.post('/englishCheck', auth.verifyTokenPost, englishController.check);
router.delete('/englishDelete', auth.verifyTokenPost, englishController.delete);

module.exports = router;
