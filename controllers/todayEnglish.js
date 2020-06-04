const db = require('../models');
const crypto = require('crypto');
const TodayEnglish = db.TodayEnglish;

exports.add = async (req, res) => {
    
    let data = req.body;

    return res.json('ok');
}
