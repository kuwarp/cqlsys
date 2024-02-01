const express = require('express');
const router = express.Router();

const { accessProtectedAPI } = require('../controllers/api.controllers');

router.get('/resource', accessProtectedAPI);

module.exports = router;
