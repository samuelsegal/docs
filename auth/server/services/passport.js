const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	//verify email / pw
	User.findOne({ email: email }, function(err, user) {
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false);
		}

		//compare passwords
		user.comparePassword(password, function(err, isMatch) {
			if (err) {
				return done(err);
			}
			if (!isMatch) {
				return done(null, false);
			}
			return done(null, user);
		});
	});
});

//Setup options for JWT strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret,
};

//create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	//check if userid in payload exists in our db
	//if it does, call done with that use
	//else call done wih no user
	User.findById(payload.sub, function(err, user) {
		console.log('user', user);
		console.log('err,', err);
		if (err) {
			return done(err, false);
		}
		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});

//Tell passport to user strategy
passport.use(jwtLogin);
passport.use(localLogin);
