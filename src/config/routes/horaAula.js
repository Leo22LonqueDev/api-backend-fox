const express = require('express')
const horaAulaController = require('../../controllers/horaAulaController')
const router = express.Router()

router.post('/createHoraAula', horaAulaController.createHoraAula)
router.get('/getHoraAula', horaAulaController.getHoraAula)
router.get('/filterHoraAula/:pesquisa', horaAulaController.filterHoraAula)
router.put('/updateQuantidadeAula', horaAulaController.updateQuantidadeAula)

module.exports = router