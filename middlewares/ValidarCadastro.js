const { response } = require('express')
const { Usuario } = require('../models')


module.exports = async (req, res, next) => {
    let { email, nome, senha } = req.body
    let user = await Usuario.findAll({ where: { email } })
    if (user.length) {
        res.status(400).json({ erro: "Email já cadastrado" })
        return;
    } else {
        if (senha.lenght < 6 || senha.lenght > 12) {
            response.status(400).json({ erro: "Senha não deve ser menor que 6 caracters ou maior que 12." })
            return
        } else {
            if (!nome || !email || !senha) {
                response.status(400).json({ erro: "Informe todos os dados" })
                return
            }
        }
        next();
    }
}