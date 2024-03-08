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
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
            });
        }
    }
}