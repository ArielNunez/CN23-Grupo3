const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/', mainController.index);

module.exports = router;