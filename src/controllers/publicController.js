const mongoose = require('mongoose')
const User = require('../models/User/User')

module.exports = {
    index: (req, res) => {
        res.send({
            title: 'Api FOX',
            version: '0.0.1'
        })
    },

    login: async (req, res) => {
        const { email, senha } = req.body
        
        console.log(req.body);

        if (!email || !senha) return res.status(400).json({ message: "Necessário preencher todos os campos" })

        try {
            const user = await User.findOne({ email: email }).lean()

            if (!user) return res.status(404).json({ message: `Usuario ou senha incorretos` })

            const checkSenha = await bcrypt.compare(senha, user.senha)

            if (!checkSenha) return res.status(422).json({ message: `Usuario ou senha incorretos` })

            //Criando token de autenticação
            const values = jwt.sign({ username: user.name, email: email, accessLevel: user.accessLevel }, secret)

            //Setando o token para o cookie
            return res.status(200).json({ msg: "Logado com sucesso", values: values, user: user.name })
        } catch (error) {
            return res.json(error)
        }
    },

}