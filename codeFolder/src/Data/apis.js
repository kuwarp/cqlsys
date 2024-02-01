const users = [
    {
        user_id: 1,
        username: 'user',
        password: 'user_password',
        roles: ['user'],
        allowed_apis: ['read_data', 'write_data', 'delete_data']
    },
    {
        user_id: 2,
        username: 'user1',
        password: 'user1_password',
        roles: ['user'],
        allowed_apis: ['read_data']
    },
];

const availableAPIs = ['read_data', 'write_data', 'delete_data'];

module.exports = { users, availableAPIs };
