const express = require('express')
const veiculosController = require('../../controllers/veiculosController')
const router = express.Router()

router.post('/createVeiculos', veiculosController.createVeiculos)
router.get('/getVeiculos', veiculosController.getVeiculos)

module.exports = router