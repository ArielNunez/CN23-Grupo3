const express = require('express');
const router = express.Router();

const usersController = require('../../controllers/api/usersController');

router.get('/', usersController.all);

module.exports = router;