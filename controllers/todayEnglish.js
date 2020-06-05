const db = require('../models');
const TodayEnglish = db.TodayEnglish;

exports.get = async (req, res) => {
    console.log(res.locals.id);

    const clientToken = req.cookies.user;
    const decoded = jwt.verify(clientToken, secretObj.secret);

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
