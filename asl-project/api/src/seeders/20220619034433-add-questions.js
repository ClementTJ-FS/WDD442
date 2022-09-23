'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Questions',
      [
        // Quiz 1
        {
          questionText: 'Question one?',
          quizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question two?',
          quizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question three?',
          quizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question four?',
          quizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Quiz 2
        {
          questionText: 'Question one?',
          quizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question two?',
          quizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question three?',
          quizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question four?',
          quizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Quiz 3
        {
          questionText: 'Question one?',
          quizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question two?',
          quizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question three?',
          quizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question four?',
          quizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Quiz 4
        {
          questionText: 'Question one?',
          quizId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question two?',
          quizId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question three?',
          quizId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Question four?',
          quizId: 4,
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
        { quizId: 1 },
        { quizId: 2 },
        { quizId: 3 },
        { quizId: 4 },
      ],
    });
  },
};
