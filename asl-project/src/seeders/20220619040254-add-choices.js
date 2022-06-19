"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 1; i <= 16; i++) {
      for (let j = 1; j <= 4; j++) {
        await queryInterface.bulkInsert("Choices", [
          {
            choiceText: `Choice ${j}`,
            questionId: i,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Choices", {
      [Sequelize.Op.or]: [
        { questionId: 1 },
        { questionId: 2 },
        { questionId: 3 },
        { questionId: 4 },
      ],
    });
  },
};
