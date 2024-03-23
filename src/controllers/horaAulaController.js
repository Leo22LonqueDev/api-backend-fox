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
    },

    getHoraAula: async (req, res) => {
        try {
            const find = await HorasAula.find()

            return res.status(200).json(find)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    },

    filterHoraAula: async (req, res) => {
        try {
            const { pesquisa } = req.params

            console.log(pesquisa);

            const filter = await HorasAula.find({
                $or: [
                    {
                        tipo: { $regex: pesquisa }
                    }, {
                        veiculo: { $regex: pesquisa }
                    }, {
                        instrutor: { $regex: pesquisa }
                    }, {
                        data: { $regex: pesquisa }
                    }, {
                        mes: { $regex: pesquisa }
                    },
                ]
            })
            console.log(filter);

            return res.status(200).json(filter)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    },

    updateQuantidadeAula: async (req, res) => {
        try {
            const { _id, quantidadeHoraAula } = req.body

            console.log(req.body);

            const update = await HorasAula.updateOne({
                _id: _id
            }, {
                $set: { 'quantidadeAulas': quantidadeHoraAula }
            })
            console.log(update);

            return res.status(200).json(update)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    }
}