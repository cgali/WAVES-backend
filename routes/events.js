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

// GET /events-list   EVENT PROFILE.
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const event = await Event.findById(id);
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
		const updateEvent = await Event.findByIdAndUpdate(id, {
			image,
			title,
			beach,
			date,
			type,
			description,
		});
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
	const { title, description } = req.body;
	const owner = req.session.currentUser._id;
	try {
		const addReview = await Event.findByIdAndUpdate(
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

// POST /events-list   UPDATE REVIEW.
router.post('/:id/update/:_id', async (req, res, next) => {
	const { _id } = req.params;
	const { title, description } = req.body;
	try {
		const updateReview = await Event.update(
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

// POST /events-list   DELETE REVIEW.
router.post('/:id/delete/:_id', async (req, res, next) => {
	const { id, _id } = req.params;
	try {
		const deleteReview = await Event.findByIdAndUpdate(id, {
			$pull: { reviews: { _id } },
		});
		res.status(200).json(deleteReview);
	} catch (error) {
		next(error);
	}
});

// POST /events-list   ADD/REMOVE PARTICIPANT.
router.post('/:id/participant', async (req, res, next) => {
	const { id } = req.params;
	const { participant } = req.body;
	const user = req.session.currentUser._id;
	if (participant === 'true') {
		try {
			const addParticipant = await Event.findByIdAndUpdate(
				id,
				{
					$push: { participants: user },
				},
				{ new: true }
			);
			res.status(200).json(addParticipant);
		} catch (error) {
			next(error);
		}
	} else {
		try {
			const removeParticipant = await Event.findByIdAndUpdate(
				id,
				{
					$pull: { participants: user },
				},
				{ new: true }
			);
			res.status(200).json(removeParticipant);
		} catch (error) {
			next(error);
		}
	}
});

module.exports = router;
