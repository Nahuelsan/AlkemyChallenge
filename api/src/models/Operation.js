const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('operation', {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        concept: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        date:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};