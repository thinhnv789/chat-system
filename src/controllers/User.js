const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
const nodemailer = require('nodemailer');
const passport = require('passport');
const User = require('../models/User');


/**
 * GET /
 * Index page.
 */
exports.getIndex = (req, res) => {
  User.find({}).populate('roles').exec(function (err, users) {
		if (err) {
			console.log('err', err)
			return done(err);
		}
		
		res.render('user/index', {
			title: 'Account List',
			current: ['user', 'index'],
			users: users
		});
	});
};