const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  joining_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'employees',
  timestamps: false 
});


module.exports = Employee;
