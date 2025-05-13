const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('company_db', 'root', 'MySQL@123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log,
});

module.exports = sequelize;
