/* eslint-disable no-console */
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// GET /surfers-list   LIST ALL SURFERS
router.get('/', async (req, res, next) => {
	try {
		const surfers = await User.find();
		console.log('listing surfers');
		res.status(200).json({ surfers });
	} catch (err) {
		next(console.log('Error while listing surfers: ', err));
	}
});

// GET /surfers-list/:id   SURFER PROFILE
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const surfer = await User.findById(id);
		console.log(surfer);
		res.status(200).json({ surfer });
	} catch (err) {
		next(console.log('Error while listing surfer: ', err));
	}
});

module.exports = router;
