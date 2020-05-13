/* eslint-disable no-console */
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// GET /surfers-list   LIST ALL SURFERS.
router.get('/', async (req, res, next) => {
	try {
		const surfers = await User.find();
		res.status(200).json({ surfers });
	} catch (error) {
		next(error);
	}
});

// GET /surfers-list/:id   SURFER PROFILE.
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const surfer = await User.findById(id);
		res.status(200).json({ surfer });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
