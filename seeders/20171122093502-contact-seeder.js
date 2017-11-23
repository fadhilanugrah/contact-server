'use strict';
var faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    var fake_contacts = []
    for(i=0; i<50;i++){
      var contact ={
        first_name: faker.name.firstName
        last_name: faker.name.lastName
        phone: faker.phone.phoneNumber
        email: faker.internet.email
        address: faker.address.streetAddress
      }
      contacts.push(contact)
    }
    console.log(fake_contacts)
    return queryInterface.bulkInsert('Contacts', fake_contacts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
     return queryInterface.bulkDelete('Contacts', null, {});
  }
};
