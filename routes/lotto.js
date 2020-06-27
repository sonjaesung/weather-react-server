var express = require("express");
var router = express.Router();
var lottoController = require("../controllers/lotto");
var auth = require("../controllers/authorization");

router.get("/", auth.verifyToken, lottoController.get);

module.exports = router;
