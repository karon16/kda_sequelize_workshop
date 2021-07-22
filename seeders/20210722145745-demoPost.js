'use strict';
const faker = require("faker")

const posts = [...Array(100)].map(post => ({title : faker.name.title, content : faker.lorem.sentence(250), userId : faker.datatype.number({min : 1, max :100})}))
module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('posts', posts, {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('posts', null, {});

  }
};
