const express = require('express');
const Beach = require('../models/Beach');

const router = express.Router();

// GET /surfers-list page.
router.get('/', async (req, res, next) => {
	try {
		const beaches = await Beach.find();
		console.log('listing beaches');
		res.status(200).json({ beaches });
	} catch (err) {
		next(console.log('Error while listing beaches: ', err));
	}
});

// GET /surfers-list/:id page.
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const beach = Beach.findById(id);
		console.log(beach);
		res.status(200).json({ beach });
	} catch (err) {
		next(console.log('Error while listing the beach: ', err));
	}
});

module.exports = router;
