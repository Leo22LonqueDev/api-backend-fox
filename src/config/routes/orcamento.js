const express = require('express')
const orcamentoController = require('../../controllers/orcamentoController')
const router = express.Router()

router.post('/createOrcamento', orcamentoController.createOrcamento)


module.exports = router