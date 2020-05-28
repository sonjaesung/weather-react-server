const db = require('../models');
const crypto = require('crypto');

const User = db.User;

let key = 'salt';

exports.login = async (req, res) => {
    let data = req.body;

    let user = await User.findOne({
        where: {
            id: data.email, 
        }
    });
    
    if(user !== null)
    {
        //암호화 해제
        var decipher = crypto.createDecipher('aes192', key);
        decipher.update(user.dataValues.pw, 'base64', 'utf8');
        var decipheredOutput = decipher.final('utf8');
        
        if(decipheredOutput === data.pw)
        {
            return res.json(user);
        }
        else
        {
            return res.json(null);
        }
    }
    else
    {
        return res.json(user);
    }
};

exports.join = async (req, res) => {
    
    let data = req.body;

    //암호화
    var cipher = crypto.createCipher('aes192', key);
    cipher.update(data.pw, 'utf8', 'base64');
    var cipheredOutput = cipher.final('base64');

    await User.findOrCreate({
        defaults: {
            pw: cipheredOutput,
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
