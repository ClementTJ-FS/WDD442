'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          name: 'Database Abstraction Layers',
          Weight: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Object Relational Mappers',
          Weight: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Using Migrations',
          Weight: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'RESTful Design Patters',
          Weight: 25,
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
