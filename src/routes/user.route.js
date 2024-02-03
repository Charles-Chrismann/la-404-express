const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const { auth } = require('../middlewares')

router.get('/me', auth, userController.me)

module.exports = router