require('dotenv').config();

const mongoose = require('mongoose');
const Event = require('../models/Event');

mongoose
	.connect(`${process.env.MONGODB_URI}`, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(x => {
		// eslint-disable-next-line no-console
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
		// eslint-disable-next-line no-use-before-define
		return Event.insertMany(events);
	})
	.catch(err => {
		// eslint-disable-next-line no-console
		console.error('Error connecting to mongo', err);
	});

const events = [
	{
		owner: '5eb5741d58ec0a08eb7206ce',
		image: '../events/training.jpg',
		title: 'Training day',
		beach: 'Salou',
		date: '2020-08-24',
		type: 'training',
		description: 'Training the strength and intensity of the paddle. Adapted to the level of every participant',
		participants: ['5eb5741d58ec0a08eb7206d0', '5eb5741d58ec0a08eb7206d2', '5eb5741d58ec0a08eb7206ce'],
		reviews: [],
	},
	{
		owner: '5eb5741d58ec0a08eb7206cf',
		image: '../events/competition.jpg',
		title: 'Open Surf Barcelona',
		beach: 'Barceloneta',
		date: '2020-08-25',
		type: 'competition',
		description:
			'The first championship made in Barcelona. It is not necessary to have a good level, only bring your passion to surf and enjoy a day with other surfer and companions.',
		participants: [
			'5eb5741d58ec0a08eb7206d0',
			'5eb5741d58ec0a08eb7206cf',
			'5eb5741d58ec0a08eb7206d4',
			'5eb5741d58ec0a08eb7206cc',
		],
		reviews: [],
	},
	{
		owner: '5eb5741d58ec0a08eb7206d1',
		image: '../events/surf-dog.jpg',
		title: 'Surf dog day',
		beach: 'Ocata',
		date: '2020-08-12T00:00:00.000+00:00',
		type: 'others',
		description:
			'It is the day to share with your dog a surfing day. Come with your dog and stay with other surfers dogs.',
		participants: ['5eb5741d58ec0a08eb7206cd', '5eb5741d58ec0a08eb7206cf', '5eb5741d58ec0a08eb7206d1'],
		reviews: [],
	},
];

Event.create(events, err => {
	if (err) {
		throw err;
	}
	// eslint-disable-next-line no-console
	console.log(`Created ${events.length} events`);
	mongoose.connection.close();
});
