'use strict';
const { v1 } = require('uuid')
const uuid = v1;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: uuid(),
        name: 'Test 1',
        email: 'tu.hoang+10@madison-technology.com',
        password: '123456'
      },
      {
        id: uuid(),
        name: 'Test 2',
        email: 'tu.hoang+11@madison-technology.com',
        password: '123456'
      },
      {
        id: uuid(),
        name: 'Test 3',
        email: 'tu.hoang+12@madison-technology.com',
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
        [Op.in]: ['tu.hoang+10@madison-technology.com', 'tu.hoang+11@madison-technology.com', 'tu.hoang+12@madison-technology.com']
      }
    })
  }
};
