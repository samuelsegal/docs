const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}
exports.signin = function(req, res, next) {
	//user has already been authenticated, give them a token
	console.log('userrrrrrrr', req.user);
	res.send({ token: tokenForUser(req.user) });
};
exports.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.status(422).send({ error: 'Must provide email and password' });
	}
	User.findOne({ email: email }, function(err, existingUser) {
		if (err) {
			return next(err);
		}

		if (existingUser) {
			return res.status(422).send({ error: 'Email already exists' });
		}

		const user = new User({
			email: email,
			password: password,
		});
		user.save(function(err) {
			if (err) {
				return next(err);
			}

			//respond with success
			res.json({ token: tokenForUser(user) });
		});
	});
};
