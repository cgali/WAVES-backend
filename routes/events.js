/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

// GET /events-list   EVENTS LIST.
router.get('/', async (req, res, next) => {
	try {
		const events = await Event.find();
		res.status(200).json({ events });
	} catch (error) {
		next(error);
	}
});

// GET /events-list/participants   EVENTS USER PARTICIPANTS.
router.get('/participants', async (req, res, next) => {
	const user = req.session.currentUser._id;
	try {
		const events = await Event.find({
			participants: user,
		});
		res.status(200).json({ events });
	} catch (error) {
		next(error);
	}
});

// GET /events-list/owner   EVENTS USER OWNER.
router.get('/owner', async (req, res, next) => {
	const user = req.session.currentUser._id;
	try {
		const events = await Event.find({
			owner: user,
		});
		res.status(200).json({ events });
	} catch (error) {
		next(error);
	}
});

// GET /events-list/surfer-owner   EVENTS SURFER OWNER.
router.post('/surfer-owner', async (req, res, next) => {
	const { id } = req.body;
	console.log('events surfer owner:', id);
	try {
		const events = await Event.find({
			owner: id,
		});
		console.log(events);
		res.status(200).json({ events });
	} catch (error) {
		next(error);
	}
});

// GET /events-list/surfer-participants   EVENTS SURFER PARTICIPANTS.
router.post('/surfer-participants', async (req, res, next) => {
	const { id } = req.body;
	console.log('events surfer participants:', id);
	try {
		const events = await Event.find({
			participants: id,
		});
		res.status(200).json({ events });
	} catch (error) {
		next(error);
	}
});

// GET /events-list   EVENT PROFILE.
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const event = await Event.findById(id)
			.populate({ path: 'participants' })
			.populate({ path: 'owner' })
			.populate('reviews.owner');
		res.status(200).json({ event });
	} catch (error) {
		next(error);
	}
});

// POST /events-list   CREATE EVENT.
router.post('/', async (req, res, next) => {
	const { image, title, beach, date, type, description } = req.body;
	const owner = req.session.currentUser._id;
	try {
		const createEvent = await Event.create({
			owner,
			image,
			title,
			beach,
			date,
			type,
			description,
		});
		res.status(201).json(createEvent);
	} catch (error) {
		next(error);
	}
});

// PUT /events-list   UPDATE EVENT.
router.put('/:id', async (req, res, next) => {
	const { id } = req.params;
	const { image, title, beach, date, type, description } = req.body;
	try {
		const updateEvent = await Event.findByIdAndUpdate(
			id,
			{
				image,
				title,
				beach,
				date,
				type,
				description,
			},
			{ new: true }
		);
		res.status(200).json(updateEvent);
	} catch (error) {
		next(error);
	}
});

// DELETE /events-list   DELETE EVENT.
router.delete('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const event = await Event.findByIdAndDelete(id);
		res.status(200).json(event);
	} catch (error) {
		next(error);
	}
});

// POST /events-list   ADD REVIEW.
router.post('/:id/add-review', async (req, res, next) => {
	const { id } = req.params;
	const { reviewTitle, reviewDescription } = req.body;
	const owner = req.session.currentUser._id;
	try {
		const addReview = await Event.findByIdAndUpdate(
			id,
			{
				$push: { reviews: { owner, reviewTitle, reviewDescription } },
			},
			{ new: true }
		).populate('reviews.owner');
		res.status(200).json(addReview);
	} catch (error) {
		next(error);
	}
});

// POST /events-list   UPDATE REVIEW.
router.post('/:id/update/:_id', async (req, res, next) => {
	const { _id } = req.params;
	const { reviewTitle, reviewDescription } = req.body;
	try {
		const updateReview = await Event.update(
			{ 'reviews._id': _id },
			{
				$set: { 'reviews.$.title': reviewTitle, 'reviews.$.description': reviewDescription },
			},
			{ new: true }
		).populate('reviews.owner');
		res.status(200).json(updateReview);
	} catch (error) {
		next(error);
	}
});

// POST /events-list   DELETE REVIEW.
router.post('/:id/delete-review/:_id', async (req, res, next) => {
	const { id, _id } = req.params;
	try {
		const deleteReview = await Event.findByIdAndUpdate(
			id,
			{
				$pull: { reviews: { _id } },
			},
			{ new: true }
		).populate('reviews.owner');
		res.status(200).json(deleteReview);
	} catch (error) {
		next(error);
	}
});

// POST /events-list   ADD PARTICIPANT.
router.post('/:id/add-participant', async (req, res, next) => {
	const { id } = req.params;
	const user = req.session.currentUser._id;
	try {
		const addParticipant = await Event.findByIdAndUpdate(
			id,
			{
				$push: { participants: user },
			},
			{ new: true }
		).populate({ path: 'participants' });
		res.status(200).json(addParticipant);
	} catch (error) {
		next(error);
	}
});

// POST /events-list   REMOVE PARTICIPANT.
router.post('/:id/remove-participant', async (req, res, next) => {
	const { id } = req.params;
	const user = req.session.currentUser._id;
	try {
		const removeParticipant = await Event.findByIdAndUpdate(
			id,
			{
				$pull: { participants: user },
			},
			{ new: true }
		).populate({ path: 'participants' });
		res.status(200).json(removeParticipant);
	} catch (error) {
		next(error);
	}
});

// // POST /events-list   ADD/REMOVE PARTICIPANT.
// router.post('/:id/participant', async (req, res, next) => {
// 	const { id: eventId } = req.params;
// 	const { participant } = req.body;
// 	const user = req.session.currentUser._id;
// 	if (participant === 'true') {
// 		try {
// 			const addParticipant = await Event.findByIdAndUpdate(
// 				eventId,
// 				{
// 					$push: { participants: user },
// 				},
// 				{ new: true }
// 			);
// 			res.status(200).json(addParticipant);
// 		} catch (error) {
// 			next(error);
// 		}
// 	} else {
// 		try {
// 			const removeParticipant = await Event.findByIdAndUpdate(
// 				eventId,
// 				{
// 					$pull: { participants: user },
// 				},
// 				{ new: true }
// 			);
// 			res.status(200).json(removeParticipant);
// 		} catch (error) {
// 			next(error);
// 		}
// 	}
// });

module.exports = router;
