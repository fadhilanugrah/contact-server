'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contacts = sequelize.define('Contacts', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contacts;
};