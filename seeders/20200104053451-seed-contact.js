'use strict';

const faker = require('faker');

const seedContacts = []

for (let i = 0; i < 4; i++) {
  let person = {
    name: faker.name.firstName(),
    phone: faker.phone.phoneNumber(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  seedContacts.push(person)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', seedContacts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', seedContacts, {});
  }
};
