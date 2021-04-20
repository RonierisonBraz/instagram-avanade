const { Post, Comentario, sequelize } = require('../models');


const postsController = {
    index: async (request, response) => {
        let posts = await Post.findAll();
        return response.json(posts);
    },
    create: async (request, response) => {
        let { texto, img, usuarios_id, n_likes } = request.body;
        let novoPost = await Post.create({
            texto, img, usuarios_id, n_likes
        });
        return response.json(novoPost);
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

module.exports = postsController;