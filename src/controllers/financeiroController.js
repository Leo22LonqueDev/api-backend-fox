const Financeiro = require("../models/Financeiro/Financeiro");

module.exports = {

    createFinanceiro: async (req, res) => {
        try {
            const { nomeProduto, quantidade, tipoPagamento, valor, dataPagamento } = req.body

            const result = await Financeiro.create({
                nomeProduto,
                quantidade,
                tipoPagamento,
                valor,
                dataPagamento,
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

            return res.status(200).json(find)
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    }

}