const db = require('../models');
const User = db.User;

exports.login = async (req, res) => {
    let data = req.body;
    let transaction = null;

    try{
        transaction = await User.sequelize.transaction();
        let user = await User.findOne({
            where: {
                id: data.email, 
                pw: data.pw
            }
        }, {
            transaction
        });

        await transaction.commit();
        
        return res.json(user);
    }
    catch(err) {
        await transaction.rollback();
    }
};

exports.join = async (req, res) => {
    
    let data = req.body;
    let transaction = null;

    await User.findOrCreate({
        defaults: {
            pw: data.pw,
            name: data.name,
            gender: data.gender,
            phone: data.phone
        },
        where: {
            id: data.email
        }
    }).spread((user, created) => {
        return res.json(created);
    });
}
