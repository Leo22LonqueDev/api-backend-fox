const express = require('express')
const horaAulaController = require('../../controllers/horaAulaController')
const router = express.Router()

router.post('/createHoraAula', horaAulaController.createHoraAula)
router.get('/filterHoraAula', horaAulaController.filterHoraAula)
router.put('/updateQuantidadeAula', horaAulaController.updateQuantidadeAula)
router.put('/updateQuantidadeAulaExtra', horaAulaController.updateQuantidadeAulaExtra)

module.exports = router