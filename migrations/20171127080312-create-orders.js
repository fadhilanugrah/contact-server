'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer: {
        type: Sequelize.STRING
      },
      delivery_date: {
        type: Sequelize.DATEONLY
      },
      exp_delivery_date: {
        type: Sequelize.DATEONLY
      },
      order_date: {
        type: Sequelize.DATEONLY
      },
      product_id: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      order_no: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      aging_status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};