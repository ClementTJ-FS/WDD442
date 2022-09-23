'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 1; i <= 16; i++) {
      for (let j = 1; j <= 4; j++) {
        await queryInterface.bulkInsert('Choices', [
          {
            choiceText: `Choice ${j}`,
            QuestionId: i,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Choices', {
      [Sequelize.Op.or]: [
        { QuestionId: 1 },
        { QuestionId: 2 },
        { QuestionId: 3 },
        { QuestionId: 4 },
      ],
    });
  },
};
