const db = require('../models');
const TodayEnglish = db.TodayEnglish;

exports.get = async (req, res) => {

    return res.json(res.locals);
}

exports.add = async (req, res) => {
    
    let data = req.body;
    console.log(data);

    return res.json('ok');
}
