'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Job, {
        foreignKey: "companyId"
      })
    }
  }
  Company.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "name must filled"},
        notNull: {msg: "name must filled"}
      }
    },
    companyLogo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "company logo must filled"},
        notNull: {msg: "company logo must filled"}
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "location must filled"},
        notNull: {msg: "location must filled"}
      }
    },
    email: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "description  must filled"},
        notNull: {msg: "description must filled"}
      }
    },
  }, {
    sequelize,
    modelName: "Company",
  });
  return Company;
};