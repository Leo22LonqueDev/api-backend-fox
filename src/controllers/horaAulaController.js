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
    },

    updateQuantidadeAulaExtra: async (req, res) => {
        try {
            const { _id, quantidadeHoraAulaExtra } = req.body

            console.log(req.body);

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