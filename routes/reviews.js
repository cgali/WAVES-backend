const express = require('express');
const Review = require('../models/Review');
// const Beach = require('../models/Beach');

const router = express.Router();

// GET /reviews-list page.
router.get('/', async (req, res, next) => {
	try {
		const reviews = await Review.find();
		console.log('listing reviews', reviews);
		res.status(200).json({ reviews });
	} catch (err) {
		next(console.log('Error while listing reviews: ', err));
	}
});

// // PUT /reviews-list update page.
// router.put('/', (req, res, next) => {
// 	const { id } = req.params;
// 	const { idBeach, idReview } = req.body;
// 	Beach.findByIdAndUpdate(idBeach, {
// 		title,
// 		description,
// 	})
// 		.then(reviewUpdated => {
// 			if (reviewUpdated) {
// 				res.status(200).json(reviewUpdated);
// 			} else {
// 				res.status(404).json('not found');
// 			}
// 		})
// 		.catch(next);
// });

// DELETE /reviews-list/:id delete page
router.put('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const review = await Review.findByIdAndDelete(id);
		res.status(200).json(review);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
