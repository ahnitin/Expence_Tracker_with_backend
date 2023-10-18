const Sequelize = require("sequelize");

const sequelize = require('../helper/database');

const Expence = sequelize.define('expence',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price:{
        type:Sequelize.STRING,
        allowNull: false
    },
    description:{
        type:Sequelize.STRING,
    },
    option:{
        type:Sequelize.STRING,
        allowNull:false
    }

})

module.exports = Expence;