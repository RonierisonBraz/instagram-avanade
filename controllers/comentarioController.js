const {Comentario, sequelize} = require('./models');
const {Op} = require("sequelize");

const comentarioController = {
    index: async (request,response) => {
        let comentarios = await Comentario.findAll();
        return res.json(comentarios);
    }
}

module.exports = comentarioController;
