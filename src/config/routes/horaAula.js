const express = require('express')
const horaAulaController = require('../../controllers/horaAulaController')
const router = express.Router()

router.post('/createHoraAula', horaAulaController.createHoraAula)

module.exports = router