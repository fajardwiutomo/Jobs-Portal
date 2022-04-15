'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.User, {foreignKey: "authorId"})
      Job.belongsTo(models.Company, {foreignKey: "companyId"})
      Job.hasMany(models.History, {foreignKey: "entityId"})
      Job.belongsToMany(models.User,{
        through: "Whislists"
      })
    }
  }
  Job.init({
    title: {
      type:  DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {msg: "Title must require"},
        notNull: {msg: "Title must require"}
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Description must require"},
        notNull: {msg: "Description must require"}
      }

    } ,
    imgUrl:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Image Url must require"},
        notNull: {msg: "Image Url must require"}
      }
    },
    companyId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    status:{
      type: DataTypes.STRING,
      defaultValue: "active"
    },
    jobType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "job type must require"},
        notNull: {msg: "job type must require"}
      }
    }
  },
   {
    sequelize,
    modelName: "Job",
  });
  return Job;
};