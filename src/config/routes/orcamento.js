const express = require('express')
const router = express.Router()

router.post('/createOrcamento', orcamentoController.createOrcamento)


module.exports = router