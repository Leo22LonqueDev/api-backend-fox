const express = require('express')
const publicController = require('../controllers/publicController')

const router = express.Router()

//Public routes
router.get('/', publicController.index)
router.post('/login', publicController.login)
router.post('/logout', publicController.logout)



module.exports = router