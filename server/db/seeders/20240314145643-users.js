'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const users=[
    {
    name: "Prepod",
    email:"Prepod@mail.ru",
    password:"123"
    
   }
  ]
  const Users=users.map((el)=>({
    ...el,
    createdAt: new Date(),
      updatedAt: new Date(),
  }))
  await queryInterface.bulkInsert('Users',Users)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users')
  }
};
