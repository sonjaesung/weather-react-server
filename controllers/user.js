const db = require('../models');
const crypto = require('crypto');
let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");

const User = db.User;

let key = 'salt';

exports.get = async (req, res) => {

    let user = await User.findOne({
        where: {
            seq: res.locals.seq
        }
    });

    if(user !== null)
    {
        return res.json(user.dataValues.name);
    }else {
        return res.json(null);
    }
}

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
            // default : HMAC SHA256
            let token = jwt.sign({
                userSeq: user.seq,
                email: user.id   // 토큰의 내용(payload)
            },
            secretObj.secret,    // 비밀 키
            );

            res.cookie('user', token);
            return res.json({
                token: token,
                user: user
            });
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

exports.findEmail = async (req, res) => {
    let data = req.body;
    
    
    let user = await User.findOne({
        where: {
            name: data.name, 
            phone: data.phone,
            gender: data.gender
        }
    });

    if(user !== null)
    {
        return res.json(
            user.dataValues.id
        );
    }
    else
    {
        return res.json(user);
    }
};

exports.resetPw = async (req, res) => {
    let data = req.body;
    
    let user = await User.findOne({
        where: {
            id: data.email, 
            name: data.name
        }
    });

    if(user !== null)
    {
        //암호화
        var cipher = crypto.createCipher('aes192', key);
        cipher.update(data.pw, 'utf8', 'base64');
        var cipheredOutput = cipher.final('base64');

        await User.update({
            pw: cipheredOutput
        }, {
            where: {
                seq: user.dataValues.seq
            }
        }).then(result => {
            console.log(result);
            res.json(result);
        }).catch(err => {
            console.error(err);
        });
    }
    else
    {
        return res.json(user);
    }
};
