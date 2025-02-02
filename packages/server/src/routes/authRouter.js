const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.user);

module.exports = router;
