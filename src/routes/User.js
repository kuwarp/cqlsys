const express = require('express');
const router = express.Router();

const { registerUser, assignApiPermissions } = require('../controllers/Usercontrollers');

router.post('/register', registerUser);
router.post('/assign-permissions/:user_id', assignApiPermissions);

module.exports = router;
