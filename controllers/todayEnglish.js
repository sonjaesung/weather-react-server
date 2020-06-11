const db = require('../models');
const TodayEnglish = db.TodayEnglish;

exports.get = async (req, res) => {

    let englishList = await TodayEnglish.findAll(
        {
            where: {
                userSeq: res.locals.seq
            },
            order: [['createdAt', 'ASC']]
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
