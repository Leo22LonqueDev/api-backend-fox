const mongoose = require('mongoose')

const veiculoScheema = new mongoose.Schema({
    modelo: String,
    placa: String,
    anoDeFabricacao: String,
    cor: String,
    marca: String,
},
{
    timestamps: true,
})

module.exports = mongoose.model('Veiculo', veiculoScheema)