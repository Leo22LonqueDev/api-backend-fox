const mongoose = require('mongoose')

const orcamentoScheema = new mongoose.Schema({
    nome: String,
    telefone: String,
    situacaoInicial: String,
    categoria: String,
    dia: String,
    situacaoFinal: String,
    

},
    {
        versionKey: false,
        timestamps: true,
    })

module.exports = mongoose.model('Orcamento', orcamentoScheema)