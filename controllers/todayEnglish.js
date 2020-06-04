const db = require('../models');
const TodayEnglish = db.TodayEnglish;

exports.get = async (req, res) => {
    console.log(res.locals.id);

    return res.json('ok');
}

exports.add = async (req, res) => {

    return res.json('ok');
}
