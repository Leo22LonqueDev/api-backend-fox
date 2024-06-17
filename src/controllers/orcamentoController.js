const Orcamento = require("../models/Orcamento/Orcamento");

module.exports = {

    createOrcamento: async (req, res) => {
        try {
            const { nome, telefone, categoria, dia } = req.body

            await Orcamento.create({
                nome,
                telefone,
                categoria,
                dia
            })

            return res.status(201).json({
                msg: 'Criado com sucesso'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    },

    filterOrcamento: async (req, res) => {
        try {
            const { nome, categoria, dia, page, limit } = req.query

            if (limit === undefined) limit = 10
            if (page === undefined) page = 1
            let skip = (page - 1) * limit;

            if (!nome && !categoria && !dia) {
                const filter = await Orcamento.find().skip(skip).limit(limit)
                const total = await Orcamento.countDocuments()

                return res.status(200).json({ filter, total })
            }

            let query = {};
            if (nome) query.nome = { $regex: new RegExp(nome, 'i') };
            if (categoria) query.categoria = { $regex: new RegExp(categoria, 'i') };
            if (dia) query.dia = dia;

            const filter = await Orcamento.find(query).skip(skip).limit(limit)

            const total = await Orcamento.countDocuments({
                nome: { $regex: new RegExp(nome, 'i') },
                categoria: { $regex: categoria },
                dia: dia,
            })

            return res.status(200).json({ filter, total })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    }

}