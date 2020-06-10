const db = require('../models');
const TodayEnglish = db.TodayEnglish;

exports.get = async (req, res) => {

    let englishList = await TodayEnglish.findAll(
        {
            where: {
                userSeq: res.locals.seq
            },
            order: ['createdAt', 'DESC']
        }
    )

    return res.json(englishList);
}

exports.add = async (req, res) => {

    return res.json('ok');
}
