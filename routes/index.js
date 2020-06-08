let express = require("express");
let router = express.Router();

let loginRouter = require("./login");
let joinRouter = require("./join");
let englishRouter = require('./todayEnglish');
let weatherRouter = require('./weather');

router.use("/login", loginRouter);
router.use("/join", joinRouter);
router.use("/todayEnglish", englishRouter);
router.use("/weather", weatherRouter);

module.exports = router;
