const Sequelize = require('sequelize');

const sequelize =  new Sequelize('node-complete','root','Anju@1976',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;