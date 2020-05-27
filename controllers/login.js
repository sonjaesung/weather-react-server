const db = require('../models');
const User = db.User;

exports.login = async (req, res) => {
    console.log(req.body);
    console.log("controller");

    let user = await User.findOne({
        where: {seq: 1}
    });

    console.log(user);

    res.json("ok");
};
