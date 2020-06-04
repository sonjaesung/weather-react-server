const db = require('../models');
const TodayEnglish = db.TodayEnglish;

exports.get = async (req, res) => {

    return res.json(res.locals.id);
}

exports.add = async (req, res) => {

    return res.json('ok');
}
