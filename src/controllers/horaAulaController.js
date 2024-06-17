const moment = require("moment");
const HorasAula = require("../models/HoraAula/HorasAula");

module.exports = {

    createHoraAula: async (req, res) => {
        try {

            const { modeloVeiculo, placa, instrutor, data, valorHoraAula, valorHoraAulaExtra } = req.body
            console.log(req.body);

            const mesOrganizado = moment(data).format('YYYY-MM')

            const create = await HorasAula.create({
                tipo: modeloVeiculo,
                veiculo: placa,
                instrutor: instrutor,
                data: data,
                mes: mesOrganizado,
                valorHoraAula,
                valorHoraAulaExtra
            })
            console.log(create);

            return res.status(201).json(create)
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                msg: 'Internal Server Error'
            })
        }
    },

    filterHoraAula: async (req, res) => {
        try {
            const { instrutor, modeloVeiculo, mes } = req.query
            console.log(req.query);

            if (!instrutor && !modeloVeiculo && !mes) {
                const find = await HorasAula.find()

                return res.status(200).json(find)
            }

            const find = await HorasAula.find({
                $or: [
                    { veiculo: { $regex: new RegExp(modeloVeiculo, 'i') } },
                    { instrutor: { $regex: new RegExp(instrutor, 'i') } },
                    { mes: mes },
                ]
            });
            console.log(find);

            return res.status(200).json(find)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    },

    updateQuantidadeAula: async (req, res) => {
        try {
            const { _id, quantidadeHoraAula } = req.query

            console.log(req.query);

            const update = await HorasAula.updateOne({
                _id: _id
            }, {
                $set: { 'quantidadeAulas': quantidadeHoraAula }
            })
            // console.log(update);

            return res.status(200).json(update)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    },

    updateQuantidadeAulaExtra: async (req, res) => {
        try {
            const { _id, quantidadeHoraAulaExtra } = req.query

            console.log(req.query);

            const update = await HorasAula.updateOne({
                _id: _id
            }, {
                $set: { 'quantidadeAulasExtra': quantidadeHoraAulaExtra }
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