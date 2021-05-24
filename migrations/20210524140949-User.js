'use strict';
const userRoles = {
  admin: 'ADMIN',
  user: 'USER',
  contributor: 'CONTRIBUTOR'
};
const userStatus = {
  active: 'ACTIVE',
  inactive: 'INACTIVE',
  deleted: 'DELETED',
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      userName: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM(...Object.values(userStatus)),
        defaultValue: userStatus.active,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM(...Object.values(userRoles)),
        defaultValue: userRoles.user,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
