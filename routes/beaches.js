const express = require('express');
const Beach = require('../models/Beach');

const router = express.Router();

// GET /beaches-list page.
router.get('/', async (req, res, next) => {
	try {
		const beaches = await Beach.find();
		console.log('listing beaches');
		res.status(200).json({ beaches });
	} catch (err) {
		next(console.log('Error while listing beaches: ', err));
	}
});

// GET /beaches-list/:id page.
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const beach = await Beach.findById(id);
		console.log(beach);
		res.status(200).json({ beach });
	} catch (err) {
		next(console.log('Error while listing the beach: ', err));
	}
});

// POST /beach-list add review
router.post('/:id/add-review', async (req, res, next) => {
	const { id } = req.params;
	const { title, description } = req.body;
	const username = req.session.currentUser.name;
	const userSurname = req.session.currentUser.surname;
	// eslint-disable-next-line no-underscore-dangle
	const userId = req.session.currentUser._id;
	try {
		const addReview = await Beach.findByIdAndUpdate(
			id,
			{
				$push: { reviews: { title, description, username, userSurname, userId } },
			},
			{ new: true }
		);
		res.status(200).json(addReview);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
