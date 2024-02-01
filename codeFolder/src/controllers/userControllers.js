const jwt = require('jsonwebtoken');
const { users } = require('../Data/apis');

const secretKey = 'thisProjectforCQLsys';

function registerUser(req, res) {
    const { username, password, roles } = req.body;

    if (users.some(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already exists.' });
    }

    const newUser = {
        user_id: users.length + 1,
        username,
        password, 
        roles,
        apis: []     };

    users.push(newUser);

    const token = generateJwt(newUser);

    res.json({ message: 'User registered successfully.', token });
}

function assignApiPermissions(req, res) {
    const { user_id } = req.params;
    const { api_permissions } = req.body;

    const user = users.find(user => user.user_id == user_id);

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    user.apis = api_permissions;

    res.json({ message: 'API permissions assigned successfully.' });
}

function generateJwt(user) {
    const payload = {
        user_id: user.user_id,
        username: user.username,
        roles: user.roles,
        apis: user.apis
    };

    return jwt.sign(payload, secretKey);
}

module.exports = { registerUser, assignApiPermissions };
