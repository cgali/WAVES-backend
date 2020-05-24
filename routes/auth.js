/* eslint-disable consistent-return */
const express = require('express');
const bcrypt = require('bcrypt');

const { checkUsernameAndPasswordNotEmpty } = require('../middlewares');

const User = require('../models/User');

const bcryptSalt = 10;

const router = express.Router();

// GET /whoami   WHO AM I.
router.get('/whoami', (req, res) => {
	if (req.session.currentUser) {
		res.status(200).json(req.session.currentUser);
	} else {
		res.status(401).json({ code: 'unauthorized' });
	}
});

// POST /signup   SIGN UP.
router.post('/signup', checkUsernameAndPasswordNotEmpty, async (req, res, next) => {
	const { name, surname, email, password } = res.locals.auth;
	try {
		const user = await User.findOne({ email });
		if (user) {
			return res.status(422).json({ code: 'email-not-unique' });
		}

		const salt = bcrypt.genSaltSync(bcryptSalt);
		const hashedPassword = bcrypt.hashSync(password, salt);

		const newUser = await User.create({
			name,
			surname,
			email,
			hashedPassword,
		});
		req.session.currentUser = newUser;
		return res.json(newUser);
	} catch (error) {
		next(error);
	}
});

// POST /login   LOGIN.
router.post('/login', checkUsernameAndPasswordNotEmpty, async (req, res, next) => {
	const { email, password } = res.locals.auth;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ code: 'not-found' });
		}
		if (bcrypt.compareSync(password, user.hashedPassword)) {
			req.session.currentUser = user;
			return res.json(user);
		}
		return res.status(404).json({ code: 'not-found' });
	} catch (error) {
		next(error);
	}
});

// GET /logout   LOGOUT.
router.get('/logout', (req, res, next) => {
	req.session.destroy(error => {
		if (error) {
			next(error);
		}
		return res.status(204).send();
	});
});

module.exports = router;
