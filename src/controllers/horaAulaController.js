const moment = require("moment");
const HorasAula = require("../models/HoraAula/HorasAula");

module.exports = {

    createHoraAula: async (req, res) => {
        try {

            const { modeloVeiculo, placa, instrutor, data, mes, valorHoraAula, valorHoraAulaExtra } = req.body
            console.log(req.body);

            const create = HorasAula.create({
                tipo: modeloVeiculo,
                veiculo: placa,
                instrutor: instrutor,
                data: data,
                mes: mes,
                valorHoraAula,
                valorHoraAulaExtra
            })

            return res.status(201).json(create)
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                msg: 'Internal Server Error'
            })
        }
    }
}