const Sequelize = require("sequelize");

const sequelize = new Sequelize('expence_tracker','root','good@123',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;