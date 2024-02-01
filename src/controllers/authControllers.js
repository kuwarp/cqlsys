const jwt = require('jsonwebtoken');
const { users } = require('../Data/apis');

const secretKey = 'thisProjectforCQLsys';

function authenticateToken(req, res, next) {
    const token = req.header('Access');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

module.exports = { authenticateToken };
