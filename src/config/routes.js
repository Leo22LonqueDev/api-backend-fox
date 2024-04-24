const express = require('express')
const publicController = require('../controllers/publicController')
const userController = require('../controllers/userController')
const router = express.Router()

//Arquivo de rotas

const veiculosRoutes = require('./routes/veiculos')
const financeiroRoutes = require('./routes/financeiro')
const horaAulaRoutes = require('./routes/horaAula')
const verifyAcesso = require('../middlewares/verifyAcesso')
const orcamentoRoutes = require('./routes/orcamento')

//Public routes

router.get('/', publicController.index)
router.post('/users', userController.create)
router.get('/users', userController.index)
router.put('/', userController.updateUser)
router.get('/filter', userController.filterUsers)
router.post('/login', publicController.login)
router.get('/verifyAcesso', verifyAcesso.verify)

//Rotas das celulas

router.use('/veiculos', veiculosRoutes)
router.use('/financeiro', financeiroRoutes)
router.use('/horaAula', horaAulaRoutes)
router.use('/orcamento', orcamentoRoutes)

module.exports = router