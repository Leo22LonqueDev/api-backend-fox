const express = require('express')
const publicController = require('../controllers/publicController')
const userController = require('../controllers/userController')
const router = express.Router()

//Arquivo de rotas

const veiculosRoutes = require('./routes/veiculos')
const financeiroRoutes = require('./routes/financeiro')
const horaAulaRoutes = require('./routes/horaAula')

//Public routes

router.get('/', publicController.index)
router.post('/users', userController.create)
router.get('/users', userController.index)
router.put('/', userController.updateUser)
router.get('/filter', userController.filterUsers)

//Rotas das celulas

router.use('/veiculos', veiculosRoutes)
router.use('/financeiro', financeiroRoutes)
router.use('/horaAula', horaAulaRoutes)

module.exports = router