'use strict';
const faker = require("faker")
faker.locale = "en"
const users = [...Array(100)].map(user => {
  const name = faker.name.firstName()
  return {
    name,
    email : name.toLowerCase() + "@gmail.com",
    password : faker.internet.password(10),
    createdAt : new Date(),
    updatedAt : new Date()
  }
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
