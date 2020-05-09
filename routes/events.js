const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

// GET /events-list page.
router.get('/', async (req, res, next) => {
	try {
		const events = await Event.find();
		console.log('listing events', events);
		res.status(200).json({ events });
	} catch (err) {
		next(console.log('Error while listing events: ', err));
	}
});

// GET /events-list/:id page.
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const event = await Event.findById(id);
		console.log('listing events', event);
		res.status(200).json({ event });
	} catch (err) {
		next(console.log('Error while listing the event: ', err));
	}
});

// POST /events-list add review
router.post('/:id/add-review', async (req, res, next) => {
	const { id } = req.params;
	const { title, description } = req.body;
	const username = req.session.currentUser.name;
	const userSurname = req.session.currentUser.surname;
	// eslint-disable-next-line no-underscore-dangle
	const userId = req.session.currentUser._id;
	try {
		const addReview = await Event.findByIdAndUpdate(
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

// POST /events-list create page
router.post('/', async (req, res, next) => {
	const { image, title, beach, date, type, description } = req.body;
	try {
		const createEvent = await Event.create({
			image,
			title,
			beach,
			date,
			type,
			description,
		});
		res.status(201).json(createEvent);
	} catch (err) {
		next(console.log('Error while creating the event: ', err));
	}
});

// PUT /events-list update page.
router.put('/', (req, res, next) => {
	const { id } = req.params;
	const { image, title, beach, date, type, description } = req.body;
	Event.findByIdAndUpdate(id, {
		image,
		title,
		beach,
		date,
		type,
		description,
	})
		.then(eventUpdated => {
			if (eventUpdated) {
				res.status(200).json(eventUpdated);
			} else {
				res.status(404).json('not found');
			}
		})
		.catch(next);
});

// DELETE /events-list/:id delete page
router.delete('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const event = await Event.findByIdAndDelete(id);
		res.status(200).json(event);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
