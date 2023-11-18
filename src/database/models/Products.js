module.exports = (sequelize, DataTypes) => {
    let alias = "Products";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            // AUTO_INCREMENT -> autoIncrement
            autoIncrement: true,
            // PRIMARY KEY -> primaryKey
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            // NOT NULL -> allowNull
            // allowNull: false
        },
        price: {
            type: DataTypes.INTEGER.UNSIGNED,
            // NOT NULL -> allowNull
            // allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            // NOT NULL -> allowNull
            // allowNull: false
        },
        
    };

    let config = {
        tableName: "products",
        timestamps: false, // CREATED_AT UPDATED_AT DELETED_AT
    };

    const Model = sequelize.define(alias, cols, config);

    return Model;
}