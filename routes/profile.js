const express = require('express');
const User = require('../models/User');

const router = express.Router();

// GET /profile page.
router.get('/profile', async (req, res, next) => {
	try {
		const profile = await User.find();
		console.log('listing profile');
		res.status(200).json({ profile });
	} catch (err) {
		next(console.log('Error while listing profile: ', err));
	}
});

router.put('/profile', (req, res, next) => {
	const { id } = req.params;
	const { name, surname, image, favoriteBoard, level, typeOfWaves, frequentsBeaches } = req.body;
	User.findByIdAndUpdate(id, {
		name,
		surname,
		image,
		favoriteBoard,
		level,
		typeOfWaves,
		frequentsBeaches,
	})
		.then(profileUpdated => {
			if (profileUpdated) {
				res.json(profileUpdated);
			} else {
				res.status(404).json('not found');
			}
		})
		.catch(next);
});

module.exports = router;
