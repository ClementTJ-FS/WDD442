'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "Questions",
      "question",
      "questionText"
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "Questions",
      "questionText",
      "question"
    );
  }
};
