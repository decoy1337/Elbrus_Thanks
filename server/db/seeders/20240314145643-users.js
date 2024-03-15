'use strict';
const bcrypt=require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const users=[
    {
    name: "Prepod",
    email:"Prepod@mail.ru",
    password:await bcrypt.hash('123',10)
    
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
