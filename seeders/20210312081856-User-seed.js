'use strict';
const { v1 } = require('uuid')
const uuid = v1;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: uuid(),
        name: 'Test 1',
        email: 'user1@gmail.com',
        password: '123456'
      },
      {
        id: uuid(),
        name: 'Test 2',
        email: 'user2@gmail.com',
        password: '123456'
      },
      {
        id: uuid(),
        name: 'Test 3',
        email: 'user3@gmail.com',
        password: '123456'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const { Op } = Sequelize;

    await queryInterface.bulkDelete('Users', {
      email: {
        [Op.in]: ['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com']
      }
    })
  }
};
