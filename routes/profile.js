/* eslint-disable no-console */
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// GET /profile PROFILE INFO.
router.get('/', async (req, res, next) => {
	try {
		res.status(200).json(req.session.currentUser);
	} catch (err) {
		next(console.log('Error while listing profile: ', err));
	}
});

// PUT /profile   UPDATE PROFILE.
router.put('/', async (req, res, next) => {
	const { _id: id } = req.session.currentUser;
	try {
		const updateProfile = await User.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json(updateProfile);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
