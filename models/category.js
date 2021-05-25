'use strict';
const { Model } = require('sequelize');
const Sequelize = require('sequelize');

import { constants } from '../core/constants';
const { userStatus, userRoles } = constants;

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Categories.hasMany(models.Books, { as: 'Category_Book' });
    }
  }
  Category.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Categories',
      // paranoid: true,
      deletedAt: 'deletedAt',
    }
  );

  return Category;
};
