"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const students = [
      {
        name: "Alex",
        phase: "1",
        count_thank: 0,
      },
      {
        name: "Vlad",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "nikita",
        phase: "3",
        count_thank: 0,
      },
    ];
    const Students = students.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Students", Students);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Students");
  },
};
