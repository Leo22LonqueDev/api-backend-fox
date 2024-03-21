const mongoose = require('mongoose')

const horaAulaScheema = new mongoose.Schema({
    veiculo: String,
    tipo: String,
    instrutor: String,
    data: String,
    mes: String,
    quantidadeAulas: String,
    valorAulas: String,
    totalAulas: String,
    quantidadeAulasExtra: String,
    valorAulasExtra: String,
    totalAulasExtra: String,

},
    {
        versionKey: false,
        timestamps: true,
    })

module.exports = mongoose.model('HoraAula', horaAulaScheema)