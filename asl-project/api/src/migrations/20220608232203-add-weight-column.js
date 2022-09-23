'use strict';

const { sequelize } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Quizzes', 'weight', {
      type: Sequelize.FLOAT,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Quizzes', 'weight');
  },
};
