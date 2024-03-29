'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Bookings'
    queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: new Date("2021-11-19"),
        endDate: new Date("2021-11-26"),
      },
      {
        spotId: 2,
        userId: 2,
        startDate: new Date("2021-11-19"),
        endDate: new Date("2021-11-26"),
      },
      {
        spotId: 3,
        userId: 3,
        startDate: new Date("2021-11-19"),
        endDate: new Date("2021-11-26"),
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Bookings'
    const Op = Sequelize.Op;
    queryInterface.bulkDelete(options, {
        id: {[Op.in]: [1, 2, 3]}
    }, {})
  }
};
