'use strict';
module.exports = (sequelize, DataTypes) => {
  var Orders = sequelize.define('Orders', {
    customer: DataTypes.STRING,
    delivery_date: DataTypes.DATEONLY,
    exp_delivery_date: DataTypes.DATEONLY,
    order_date: DataTypes.DATEONLY,
    product_id: DataTypes.STRING,
    status: DataTypes.INTEGER,
    order_no: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    aging_status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Orders;
};