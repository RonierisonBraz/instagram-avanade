const {Comentario, sequelize} = require('./models');
const {Op} = require("sequelize");

const comentarioController = {
    index: async (request,response) => {
        let comentarios = await Comentario.findAll();
        return res.json(comentarios);
    },
    create: async (request, response) => {
        let { texto, usuarios_id, posts_id } = request.body;
        let novoComentario = await Comentario.create({
            texto, usuarios_id, posts_id 
        });
        return response.json(novoComentario);
    },
    update: async (request, response) => {
        let { id } = request.params
        let {texto, img, usuarios_id, n_likes} = request.body;
        let atualizarPost = await Post.update({
            texto, img, usuarios_id, n_likes
        }, {
            where: { id }
        });
        return response.json(atualizarPost);
    },
    delete: async (request, response) => {
        let {id} = request.params;

        const postDeletado = await Post.destroy({
            where: {id}
        })
        return response.json(postDeletado);
    }

}

module.exports = comentarioController;
