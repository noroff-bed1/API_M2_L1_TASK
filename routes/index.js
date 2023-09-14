var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
	if (req.user == null) {
		console.log('header set json');
		res.setHeader('Content-Type', 'application/json');
	} else {
		console.log('header set text');
		res.setHeader('Content-Type', 'text/html');
	}
	res.send('<div><button style="width:100px; height:100px">this is a button</button></div>');
});

module.exports = router;

