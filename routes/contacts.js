var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET contact listing. */
router.get('/', function(req, res, next) {
	model.Contacts.findAll({})
		.then(contacts => res.json({
			error: false,
			data: contacts
		}))

		.catch(error => res.json({
			error: true,
			data:[],
			error: error
		}))
});

router.get('/:id', function(req, res, next) {
	const contact_id = req.params.id;
	
	model.Contacts.find({
		where: {
			id: contact_id
		}
	}).then(contact => res.json({
		error: false,
		data: contact
	})).catch(error => res.json({
		error: true,
		data:[],
		error: error
	}))

});
 
 
/* POST new contacts. */
router.post('/', function(req, res, next) {
	const{
		first_name,
		last_name,
		phone,
		email,
		address,
		gender,
		company,
		status
	} = req.body;
	model.Contacts.create({
		first_name: first_name,
		last_name: last_name,
		phone: phone,
		email: email,
		address: address,
		gender: gender,
		company: company,
		status : status
	}).then(contacts=> res.status(201).json({
		error: false,
		data: contacts,
		message: 'new contact has been created'
	})).catch(error=>res.json({
		error:true,
		data:[],
		error:error
	}));
});
 
 
/* update todo. */
router.put('/:id', function(req, res, next) {
 
});
 
 
/* GET todo listing. */
router.delete('/:id', function(req, res, next) {
 
});
 
module.exports = router;
