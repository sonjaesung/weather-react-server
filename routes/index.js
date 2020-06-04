let express = require("express");
let router = express.Router();

let loginRouter = require("./login");
let joinRouter = require("./join");
let englishRouter = require('./todayEnglish');
let auth = require('../controllers/authorization');

router.use("/login", loginRouter);
router.use("/join", joinRouter);
router.use("/todayEnglish", englishRouter);

module.exports = router;
