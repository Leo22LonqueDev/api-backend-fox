require('dotenv').config()
const express = require('express')
const app = express()

const mongodb = process.env.MONGODB_URL

//Mongo
const mongoose = require('mongoose')
mongoose.connect(mongodb)

const db = mongoose.connection

db.once('open', async () => {
    console.log('MongoDB connected!')
})

const routes = require('./src/config/routes')

app.use(express.json({ limit: '100mb' }))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

//Rotas da API

app.use('/', routes)

const serverPort = process.env.SERVER_PORT

app.listen(serverPort, () => {
    console.log(`Server rodando na porta ${serverPort}`);
})

module.exports = app