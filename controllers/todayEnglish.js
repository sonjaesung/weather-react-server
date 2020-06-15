const db = require('../models');
const TodayEnglish = db.TodayEnglish;

exports.get = async (req, res) => {

    let englishList = await TodayEnglish.findAll(
        {
            where: {
                userSeq: res.locals.seq,
                delete: false
            },
            order: [['createdAt', 'DESC']]
        }
    )

    return res.json(englishList);
}

exports.add = async (req, res) => {

    let data = req.body;

    let englishAdd = await TodayEnglish.create({
        userSeq: res.locals.seq,
        content: data.content,
        check: false,
        delete: false
    });

    return res.json(englishAdd);
}

exports.check = async (req, res) => {
    let data = req.body;

    let englishCheck = await TodayEnglish.update({
        check: data.check
    }, {
        where: {
            seq: data.seq
        }
    });

    return res.json(englishCheck);
}

exports.delete = async (req, res) => {
    let data = req.body;

    let englishDelete = await TodayEnglish.update({
        delete: data.delete
    }, {
        where: {
            seq: data.seq
        }
    });

    return res.json(englishDelete);
}