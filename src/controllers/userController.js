const User = require("../models/User/User");
const bcrypt = require('bcrypt')

module.exports = {

    create: async (req, res) => {
        try {

            const { email, nome, setor, dataAdmissao, telefone } = req.body


            let emailAutomatico = '';

            // if (email === '') {
            //     let nome = name.split(' ').join('.').toLowerCase().replace(/\s/g, '');
            //     // Remover acentos
            //     nome = nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + '@fox.com.br';
            //     // Construir o e-mail automático com o nome da pessoa
            //     emailAutomatico = `${nome}`;
            // } else {
            //     emailAutomatico = email;
            // }

            const user = await User.findOne({ email: email || emailAutomatico })

            if (user) {
                console.log(user);
                return res.status(422).json({ msg: 'Email ja cadastrado' })
            }

            const saltRounds = 10; // Aumente o número de rodadas de hashing
            const plainPassword = '123';

            let encryptedPassword = await bcrypt.hash(plainPassword, saltRounds);

            const newUser = await User.create({
                email: email || emailAutomatico,
                nome,
                password: encryptedPassword,
                firstAccess: 'Sim',
                setor,
                dataAdmissao,
                telefone,
            })
            console.log(newUser);

            return res.status(201).json(newUser)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Internal server error."
            })
        }
    },

    index: async (req, res) => {
        try {
            const users = await User.find()

            return res.json(users)
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Internal server error."
            })
        }
    },

    updateUser: async (req, res) => {
        try {
            const { nome, email, dataAdmissao, setor, cpf, telefone } = req.body

            console.log(req.body);

            await User.updateOne({ _id: req.body.id }, {
                nome,
                email,
                dataAdmissao,
                setor,
                cpf,
                telefone
            })
            return res.status(200).json({
                msg: 'ok'
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Internal server error."
            })
        }
    },

    filterUsers: async (req, res) => {
        try {
            const { nome } = req.query

            const filter = await User.find({
                nome: { $regex: new RegExp(nome, 'i') }
            })
            // console.log(filter)
            return res.status(200).json({ filter })
        } catch (error) {
            return res.status(500).json({
                msg: 'Internal Server Error',
                error: error.message
            });
        }
    },

    firstAccess: async (req, res) => {
        try {

            const { password, confirmPassword } = req.body

            if (password !== confirmPassword) {
                return res.status(401).json({ message: `As senhas não conferem` })
            }

            const saltRounds = 10

            const encryptedPassword = await bcrypt.hash(password, saltRounds)

            const updatePass = await User.findOneAndUpdate({
                email: req.email
            }, {
                password: encryptedPassword,
                firstAccess: 'Não'
            })

            return res.status(200).json({
                message: 'A senha foi atualizada com sucesso!',
                updatePass
            })


        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Internal server error."
            })
        }
    },

    infoUser: async (req, res) => {
        try {

            const user = await User.findOne({ email: req.email })

            return res.status(200).json({
                user
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Internal server error."
            })
        }
    },
}