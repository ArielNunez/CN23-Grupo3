const express = require('express');
const router = express.Router();

const productsController = require('../../controllers/api/productsController');

router.get('/', productsController.all);

module.exports = router;