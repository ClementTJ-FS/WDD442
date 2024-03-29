'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          name: 'Database Abstraction Layers',
          weight: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Object Relational Mappers',
          weight: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Using Migrations',
          weight: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'RESTful Design Patters',
          weight: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quizzes', {
      [Sequelize.Op.or]: [
        { name: 'Database Abstraction Layers' },
        { name: 'Object Relational Mappers' },
        { name: 'Using Migrations' },
        { name: 'RESTful Design Patters' },
      ],
    });
  },
};
