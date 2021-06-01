'use strict';
const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Books.belongsTo(models.Categories, {
        as: 'Category_Book',
        foreignKey: 'category'
      });
      models.Books.belongsTo(models.Users, {
        as: 'Author_Book',
        foreignKey: 'author'
      });
      models.Books.belongsTo(models.Users, {
        as: 'Owner_Book',
        foreignKey: 'owner'
      });
    }
  }
  Book.init(
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      owner: {
        type: DataTypes.UUID,
        allowNull: false
      },
      category: {
        type: DataTypes.UUID,
        references: {
          model: 'Categories', // Can be both a string representing the table name or a Sequelize model
          key: 'id'
        }
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Books',
      paranoid: true,
      deletedAt: 'deletedAt',
    }
  );

  return Book;
};
