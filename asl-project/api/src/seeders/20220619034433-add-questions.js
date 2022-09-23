'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Questions',
      [
        // Quiz 1
        {
          questionText: 'Question one?',
          QuizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question two?',
          QuizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question three?',
          QuizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question four?',
          QuizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Quiz 2
        {
          questionText: 'Question one?',
          QuizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question two?',
          QuizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question three?',
          QuizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question four?',
          QuizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Quiz 3
        {
          questionText: 'Question one?',
          QuizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question two?',
          QuizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question three?',
          QuizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question four?',
          QuizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Quiz 4
        {
          questionText: 'Question one?',
          QuizId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question two?',
          QuizId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question three?',
          QuizId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question four?',
          QuizId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', {
      [Sequelize.Op.or]: [
        { QuizId: 1 },
        { QuizId: 2 },
        { QuizId: 3 },
        { QuizId: 4 },
      ],
    });
  },
};
