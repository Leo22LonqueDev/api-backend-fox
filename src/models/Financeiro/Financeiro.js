const mongoose = require('mongoose')

const financeiroScheema = new mongoose.Schema({
    nomeProduto: String,
    quantidade: String,
    tipoPagamento: String,
    valor: String,
    total: String,
    dataPagamento: String,
},
{
    timestamps: true,
})

module.exports = mongoose.model('Financeiro', financeiroScheema)