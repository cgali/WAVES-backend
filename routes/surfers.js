const express = require('express');
const User = require('../models/User');

const router = express.Router();

// GET /surfers-list page.
router.get('/', async (req, res, next) => {
	try {
		const surfers = await User.find();
		console.log('listing surfers');
		res.status(200).json({ surfers });
	} catch (err) {
		next(console.log('Error while listing surfers: ', err));
	}
});

// GET /surfers-list/:id page.
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const surfer = User.findById(id);
		console.log(surfer);
		res.status(200).json({ surfer });
	} catch (err) {
		next(console.log('Error while listing surfers: ', err));
	}
});

module.exports = router;
