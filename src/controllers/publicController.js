const mongoose = require('mongoose')
const User = require('../models/User/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

module.exports = {
    index: (req, res) => {
        res.send({
            title: 'Api FOX',
            version: '0.0.1'
        })
    },

    login: async (req, res) => {
        const { email, password } = req.body

        console.log(req.body);

        if (!email || !password) return res.status(400).json({ message: "Necessário preencher todos os campos" })

        try {
            const user = await User.findOne({ email: email }).lean()

            if (!user) return res.status(404).json({ message: `Usuario ou senha incorretos` })

            const checkPassword = await bcrypt.compare(password, user.password)

            if (!checkPassword) return res.status(422).json({ message: `Usuario ou senha incorretos` })

            //Criando token de autenticação
            const token = jwt.sign({ username: user.nome, email: email }, secret)

            //Setando o token para o cookie
            return res.status(200).json({ msg: "Logado com sucesso", token: token, user: user.nome })
        } catch (error) {
            return res.json(error)
        }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('token')

            return res.status(200).json({
                msg: 'deslogou'
            })
        } catch (error) {
            return res.json(error)
        }
    }
}