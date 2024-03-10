const User = require("../models/User/User");

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

            // const saltRounds = 10; // Aumente o número de rodadas de hashing
            // const plainPassword = '123';

            // let encryptedPassword = '';

            // bcrypt.genSalt(saltRounds, function (err, salt) {
            //     bcrypt.hash(plainPassword, salt, function (err, hash) {
            //         encryptedPassword = hash;
            //     });
            // });

            const newUser = await User.create({
                email: email || emailAutomatico,
                nome,
                // password: encryptedPassword,
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

            return res.status(200).json({
                users
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Internal server error."
            })
        }
    },

    updateUser: async (req, res) => {
        try {
            const {nome, email, dataAdmissao, setor, cpf, telefone } = req.body

            await User.updateOne({_id: req.body.id}, {
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
    }
}