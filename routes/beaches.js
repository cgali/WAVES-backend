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

// POST /beach-list   ADD REVIEW
router.post('/:id/add-review', async (req, res, next) => {
	const { id } = req.params;
	const { title, description } = req.body;
	// eslint-disable-next-line no-underscore-dangle
	const owner = req.session.currentUser._id;
	try {
		const addReview = await Beach.findByIdAndUpdate(
			id,
			{
				$push: { reviews: { owner, title, description } },
			},
			{ new: true }
		);
		res.status(200).json(addReview);
	} catch (error) {
		next(error);
	}
});

// POST /beaches-list   UPDATE REVIEW
router.post('/:id/update/:_id', async (req, res, next) => {
	const { id, _id } = req.params;
	const { title, description } = req.body;
	// eslint-disable-next-line no-underscore-dangle
	console.log('ID OF EVENT:', id, 'ID OF REVIEW:', _id);
	try {
		const updateReview = await Beach.update(
			{ 'reviews._id': _id },
			{
				$set: { 'reviews.$.title': title, 'reviews.$.description': description },
			}
		);
		res.status(200).json(updateReview);
	} catch (error) {
		next(error);
	}
});

// POST /beaches-list   DELETE REVIEW
router.post('/:id/delete/:_id', async (req, res, next) => {
	const { id, _id } = req.params;
	console.log('ID OF EVENT:', id, 'ID OF REVIEW:', _id);
	try {
		const deleteReview = await Beach.findByIdAndUpdate(id, {
			$pull: { reviews: { _id } },
		});
		res.status(200).json(deleteReview);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
