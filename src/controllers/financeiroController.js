const Financeiro = require("../models/Financeiro/Financeiro");

module.exports = {

    createFinanceiro: async (req, res) => {
        try {
            const { nomeProduto, quantidade, tipoPagamento, valor, dataPagamento } = req.body

            const valorComPonto = valor.replace(',', '.')
            const valorNumerico = parseFloat(valorComPonto)

            const result = await Financeiro.create({
                nomeProduto,
                quantidade,
                tipoPagamento,
                valor,
                dataPagamento,
                total: (valorNumerico * quantidade).toFixed(2),
            })
            console.log(result);

            return res.status(201).json({ result })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    },

    getFinanceiro: async (req, res) => {
        try {
            const find = await Financeiro.find()
            const findCount = await Financeiro.find().countDocuments()

            return res.status(200).json({ find, findCount })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    },

    filterFinanceiro: async (req, res) => {
        try {
            const { nomeProduto, quantidade, tipoPagamento, dataPagamento } = req.query

            console.log(req.query);

            const filter = await Financeiro.find({
                nomeProduto: { $regex: new RegExp(nomeProduto, 'i') },
                // quantidade: { $regex: new RegExp(quantidade, 'i') },
                // tipoPagamento: { $regex: new RegExp(tipoPagamento, 'i') },
                // dataPagamento: { $regex: dataPagamento },
            })
            console.log(filter);

            return res.status(200).json(filter)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    }
}