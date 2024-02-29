const express = require('express')
const publicController = require('../controllers/publicController')
const userController = require('../controllers/userController')
const router = express.Router()

//Public routes

router.get('/', publicController.index)
router.post('/users', userController.create)
router.get('/users', userController.index)

module.exports = router