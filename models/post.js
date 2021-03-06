'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.Users, {foreinKey : "userId"})
    }
  };
  Post.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false
    },
    content : {
      type : DataTypes.TEXT,
      allowNull :false
    },
    userId : {
      type : DataTypes.INTEGER,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};