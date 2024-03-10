const Veiculos = require('../models/Veiculos/Veiculos');

module.exports = {

    createVeiculos: async (req, res) => {
        try {
            const { modelo, placa, anoDeFabricacao, cor, marca } = req.body

            console.log(req.body);

            const newVeiculo = await Veiculos.create({
                modelo,
                placa,
                anoDeFabricacao,
                cor,
                marca,
            })
            console.log(newVeiculo);

            return res.status(201).json(newVeiculo)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
            });
        }
    },

    getVeiculos: async (req, res) => {
        try {
            const result = await Veiculos.find()
            return res.status(200).json(result)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
            });
        }
    },

    updateVeiculos: async (req, res) => {
        try {
            const { modelo, placa, anoDeFabricacao, cor, marca } = req.body
            await Veiculos.updateOne({ _id: req.body.id }, { modelo, placa, anoDeFabricacao, cor, marca })

            return res.status(200).json({ msg: "OK" })

        } catch (error) {
            return res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
            });

        }
    },
    filterVeiculos: async (req, res) => {
        try {
            const { modelo } = req.body
            const filter = await Veiculos.find({
                modelo: { $regex: new RegExp(modelo, "i") }
            })
            console.log(filter)
            return res.status(200).json({filter})

        } catch (error) {
            return res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
            });

        }
    }
}