'use strict'

const express = require('express')
const router = express.Router();
const controller = require('../controllers/product-controller')

router.get('/products', controller.get);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/', controller.delete);

router.post('/teste', controller.teste);

module.exports = router