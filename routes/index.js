let express = require("express");
let router = express.Router();

let loginRouter = require("./login");
let joinRouter = require("./join");

router.use("/login", loginRouter);
router.use("/join", joinRouter);

module.exports = router;
