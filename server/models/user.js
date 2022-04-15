'use strict';
const {
  Model
} = require('sequelize');
const {hashPass} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Job, {foreignKey: "authorId"})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "username can't empty"},
        notNull: {msg: "username can't empty"},
      }

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Email can't empty"},
        notNull: {msg: "Email can't empty"},
        isEmail: {msg: "wrong format, must email"}
      },
      unique: { msg: "Email must unique"}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "password cannot empty"},
        notNull: {msg: "password cannot empty"},
        len: {
          args: [5],
          msg: "password min 5"
        }
      }
    },
    role: {
      type:  DataTypes.STRING,
      defaultValue: "Admin",
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate(user){
        user.password = hashPass(user.password)
      }
    },
    modelName: "User",
  });


  return User;
};