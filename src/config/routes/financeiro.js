const express = require('express')
const financeiroController = require('../../controllers/financeiroController')
const router = express.Router()

router.post('/createFinanceiro', financeiroController.createFinanceiro)
router.get('/getFinanceiro', financeiroController.getFinanceiro)

module.exports = router