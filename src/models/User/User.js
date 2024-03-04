const mongoose = require('mongoose')

const userScheema = new mongoose.Schema({
    nome: String,
    email: String,
    password: String,
    setor: String,
    accessLevel: String,
    firstAccess: String,
    atividadePrincipal: String,
    dataAdmissao: String,
    nomeCompleto: String,
    dataAniversario: String,
    profilePic: String,
    telefone: String,
    
},
    {
        versionKey: false
    })

module.exports = mongoose.model('User', userScheema)