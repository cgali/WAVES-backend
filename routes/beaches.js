/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const express = require('express');
const Beach = require('../models/Beach');

const router = express.Router();

// GET /beaches-list   BEACHES LIST.
router.get('/', async (req, res, next) => {
	try {
		const beaches = await Beach.find();
		console.log('listing beaches');
		res.status(200).json({ beaches });
	} catch (err) {
		next(console.log('Error while listing beaches: ', err));
	}
});

// GET /beaches-list   BEACH PROFILE.
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const beach = await Beach.findById(id);
		res.status(200).json({ beach });
	} catch (err) {
		next(console.log('Error while listing the beach: ', err));
	}
});

// POST /beaches-list   ADD REVIEW.
router.post('/:id/add-review', async (req, res, next) => {
	const { id } = req.params;
	const { title, description } = req.body;
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

// POST /beaches-list   UPDATE REVIEW.
router.post('/:id/update-review/:_id', async (req, res, next) => {
	const { _id } = req.params;
	const { title, description } = req.body;
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

// POST /beaches-list   DELETE REVIEW.
router.post('/:id/delete-review/:_id', async (req, res, next) => {
	const { id, _id } = req.params;
	try {
		const deleteReview = await Beach.findByIdAndUpdate(id, {
			$pull: { reviews: { _id } },
		});
		res.status(200).json(deleteReview);
	} catch (error) {
		next(error);
	}
});

// POST /beach-list   ADD RATE.
router.post('/:id/add-rate', async (req, res, next) => {
	const { id } = req.params;
	const { waveRate, backgroundRate, socialEnvironmentRate } = req.body;
	const owner = req.session.currentUser._id;
	try {
		const addRate = await Beach.findByIdAndUpdate(
			id,
			{
				$push: { rate: { owner, waveRate, backgroundRate, socialEnvironmentRate } },
			},
			{ new: true }
		);
		res.status(200).json(addRate);
	} catch (error) {
		next(error);
	}
});

// POST /beaches-list   UPDATE REVIEW.
router.post('/:id/update-rate/:_id', async (req, res, next) => {
	const { _id } = req.params;
	const { waveRate, backgroundRate, socialEnvironmentRate } = req.body;
	try {
		const updateRate = await Beach.update(
			{ 'rate._id': _id },
			{
				$set: {
					'rate.$.waveRate': waveRate,
					'rate.$.backgroundRate': backgroundRate,
					'rate.$.socialEnvironmentRate': socialEnvironmentRate,
				},
			}
		);
		res.status(200).json(updateRate);
	} catch (error) {
		next(error);
	}
});

// POST /beaches-list   DELETE REVIEW.
router.post('/:id/delete-rate/:_id', async (req, res, next) => {
	const { id, _id } = req.params;
	console.log('ID OF BEACHES:', id, 'ID OF RATE:', _id);
	try {
		const deleteRate = await Beach.findByIdAndUpdate(id, {
			$pull: { rate: { _id } },
		});
		res.status(200).json(deleteRate);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
