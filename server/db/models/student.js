'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:  DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type:  DataTypes.TEXT
    },
    count_thank: {
      allowNull: false,
      type:  DataTypes.INTEGER
    },
    phase:{
      allowNull: false,
      type:  DataTypes.TEXT
    },
    createdAt: {
      allowNull: false,
      type:  DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};