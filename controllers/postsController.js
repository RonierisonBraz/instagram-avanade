const {Post, sequelize} = require('./models');
const {Op} = require("sequelize");


const postsController = {
    index: async (request,response) => {
        let posts = await Post.findAll();
        return res.json(posts);
    }
}

module.exports = postsController;