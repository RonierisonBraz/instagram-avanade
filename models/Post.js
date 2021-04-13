module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        //relação  N:1 (varios post de 1 usuario)
        Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: "usuarios_id"});
        Post.hasMany(models.Comentario, {as: "comentario", foreignKey: "posts_id"});
        
        Post.belongsToMany(models.Post, {
            as: "curtiu",
            through: "curtidas",
            foreignKey: "usuarios_id",
            otherKey: "posts_id",
            timestamps: false
        })
    
    }
    
    return Post;
}