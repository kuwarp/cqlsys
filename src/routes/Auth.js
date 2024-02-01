const express = require('express');
const router = express.Router();

const { authenticateToken } = require('../controllers/authControllers');

router.use(authenticateToken);

module.exports = router;
