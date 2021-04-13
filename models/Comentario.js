module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define(

        'Comentario', {
            texto: DataTypes.STRING,
            usuarios_id: DataTypes.STRING,
            posts_id: DataTypes.INTEGER
        }, {
            tableName: "comentarios",
            timestamps: false  // serve pra 
        }
    );

    Comentario.associate = (models) => {
        //relação 1:N
        Comentario.belongsTo(models.Post, {as: "posts", foreignKey: "posts_id"});
    }

    return Comentario;
}