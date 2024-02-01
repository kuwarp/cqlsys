function accessProtectedAPI(req, res) {
    const requiredApi = 'read_data';

    if (req.user.apis.includes(requiredApi)) {
        res.json({ message: 'Access sucessful' });
    } else {
        res.status(403).json({ message: 'Insufficient permissions for this API.' });
    }
}

module.exports = { accessProtectedAPI };
