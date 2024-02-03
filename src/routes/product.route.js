const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.post('/', productController.create)

module.exports = router