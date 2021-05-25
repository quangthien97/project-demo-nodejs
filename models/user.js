'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');

import { constants } from '../core/constants';
import Book from './book';
const { userStatus, userRoles } = constants;

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Users.hasMany(models.Books, { as: 'Author_Book' });
      models.Users.hasMany(models.Books, { as: 'Owner_Book' });
    }
  };
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...Object.values(userStatus)),
      defaultValue: userStatus.active,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM(...Object.values(userRoles)),
      defaultValue: userRoles.user,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true,
    deletedAt: 'deletedAt'
  });

  return User;
};
