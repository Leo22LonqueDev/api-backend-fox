const express = require('express')
const publicController = require('../controllers/publicController')
const router = express.Router()

//Public routes

router.get('/', publicController.index)

module.exports = router