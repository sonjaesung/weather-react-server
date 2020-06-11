const jwt = require('jsonwebtoken');
let secretObj = require("../config/jwt");


const verifyToken = (req, res, next) => {
    try {
    
        const clientToken = req.query.token;
        const decoded = jwt.verify(clientToken, secretObj.secret);
 
        if (decoded) {
            res.locals.id = decoded.email;
            res.locals.seq = decoded.userSeq;
            next();
        } else {
            res.status(401).json({ error: 'unauthorized' });
        }

    } catch (err) {
        res.status(401).json({ error: 'token expired' });
    }
};

const verifyTokenPost = (req, res, next) => {
    try {
    
        const clientToken = req.body.token;
        const decoded = jwt.verify(clientToken, secretObj.secret);
 
        if (decoded) {
            res.locals.id = decoded.email;
            res.locals.seq = decoded.userSeq;
            next();
        } else {
            res.status(401).json({ error: 'unauthorized' });
        }

    } catch (err) {
        res.status(401).json({ error: 'token expired' });
    }
};

exports.verifyToken = verifyToken;
exports.verifyTokenPost = verifyTokenPost;