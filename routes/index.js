var express = require("express");
var router = express.Router();

var userRouter = require("./users");
var loginRouter = require("./login");

router.use("/users", userRouter);
router.use("/login", loginRouter);

module.exports = router;
