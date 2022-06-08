"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Choices", "choice", "choiceText");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Choices", "choiceText", "choice");
  },
};
