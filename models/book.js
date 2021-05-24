'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');
import Category from './category';
import User from './user';

import { constants } from '../core/constants';
const { userStatus, userRoles } = constants;

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      owner: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      category: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Category',
          key: 'id',
        },
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  }, {
    sequelize,
    modelName: 'Books',
    paranoid: true,
    deletedAt: 'deletedAt'
  });

  return Book;
};
