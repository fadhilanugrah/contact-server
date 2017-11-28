
var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET todo listing. */
router.get('/', function(req, res, next) {
	model.Orders.findAll({
		limit: 10
	})
        .then(orders => res.json({
            error: false,
            data: orders
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.get('/:customer', function(req, res, next) {
	const customer = req.params.customer;
	
	model.Orders.findAll({
		where: {
			customer: customer
		},
		limit: 10
	}).then(orders => res.json({
		error: false,
		data: orders
	})).catch(error => res.json({
		error: true,
		data:[],
		error: error
	}))
});
 
 
/* POST todo. */
router.post('/', function(req, res, next) {
 
});
 
 
/* update todo. */
router.put('/:id', function(req, res, next) {
	const order_id = req.params.id;

	const order = req.body;

	model.Orders.update({
		customer: order.customer,
	    delivery_date: order.delivery_date,
	    exp_delivery_date: order.exp_delivery_date,
	    order_date: order.order_date,
	    product_id: order.product_id,
	    status: order.status,
	    order_no: order.order_no,
	    qty: order.qty,
	    aging_status: order.aging_status
	},{
		where: {
			id: order_id
		}
	}).then(order => res.status(201).json({
		error: false,
		message: 'todo has been updated.'
	})).catch(error => res.json({
		error: true,
		error_message: error
	}))
});
 
 
/* GET todo listing. */
router.delete('/:id', function(req, res, next) {
 
});
 
module.exports = router;