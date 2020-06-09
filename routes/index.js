let express = require("express");
let router = express.Router();

let loginRouter = require("./login");
let joinRouter = require("./join");
let englishRouter = require('./todayEnglish');
let weatherRouter = require('./weather');
let findEmailRouter = require('./findEmail');
let resetPw = require('./resetPw');

router.use("/login", loginRouter);
router.use("/join", joinRouter);
router.use("/find-email", findEmailRouter);
router.use("/reset-pw", resetPw);
router.use("/todayEnglish", englishRouter);
router.use("/weather", weatherRouter);

module.exports = router;
