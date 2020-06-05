const db = require('../models');
const TodayEnglish = db.TodayEnglish;
const jwt = require('jsonwebtoken');
let secretObj = require("../config/jwt");

exports.get = async (req, res) => {

    return res.json('ok');
    const clientToken = req.cookies.user;
    const decoded = await jwt.verify(clientToken, secretObj.secret);

    if (decoded) {
        res.locals.id = decoded.email;
        res.locals.seq = decoded.userSeq;
        return res.json('ok');
    } else {
        return res.json('no');
    }
}

exports.add = async (req, res) => {

    return res.json('ok');
}
