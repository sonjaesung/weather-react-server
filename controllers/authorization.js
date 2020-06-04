const jwt = require('jsonwebtoken');
let secretObj = require("../config/jwt");


const verifyToken = (req, res, next) => {
    try {
        const clientToken = req.cookies.user;
        const decoded = jwt.verify(clientToken, secretObj);

        if (decoded) {
            res.locals.userId = decoded.email;
            next();
        } else {
            res.status(401).json({ error: 'unauthorized' });
        }

    } catch (err) {
        res.status(401).json({ error: 'token expired' });
    }
};

exports.verifyToken = verifyToken;