const db = require('../models');
const crypto = require('crypto');
const TodayEnglish = db.TodayEnglish;

exports.get = async (req, res) => {
    
    console.log(res.locals);

    return res.json('ok');
}

exports.add = async (req, res) => {
    
    let data = req.body;
    console.log(data);

    return res.json('ok');
}
