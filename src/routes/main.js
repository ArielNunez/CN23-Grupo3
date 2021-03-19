const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/', mainController.index);
router.get('/contacto', mainController.contacto)

module.exports = router;