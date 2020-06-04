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
		owner: '5ed8bd0c097a363a81af5dc6',
		image: '../events/training.jpg',
		title: 'Training day',
		beach: 'Salou',
		date: '2020-08-24',
		description: 'Training the strength and intensity of the paddle. Adapted to the level of every participant',
		participants: ['5ed8bd0c097a363a81af5dc9', '5ed8bd0c097a363a81af5dc8', '5ed8bd0c097a363a81af5dcd'],
		reviews: [],
	},
	{
		owner: '5ed8bd0c097a363a81af5dc9',
		image: '../events/competition.jpg',
		title: 'Open Surf Barcelona',
		beach: 'Barceloneta',
		date: '2020-08-25',
		description:
			'The first championship made in Barcelona. It is not necessary to have a good level, only bring your passion to surf and enjoy a day with other surfer and companions.',
		participants: [
			'5ed8bd0c097a363a81af5dc6',
			'5ed8bd0c097a363a81af5dc7',
			'5ed8bd0c097a363a81af5dc8',
			'5ed8bd0c097a363a81af5dcb',
			'5ed8bd0c097a363a81af5dcd',
		],
		reviews: [],
	},
	{
		owner: '5ed8bd0c097a363a81af5dca',
		image: '../events/surf-dog.jpg',
		title: 'Surf dog day',
		beach: 'Ocata',
		date: '2020-08-12T00:00:00.000+00:00',
		description:
			'It is the day to share with your dog a surfing day. Come with your dog and stay with other surfers dogs.',
		participants: ['5ed8bd0c097a363a81af5dc9', '5ed8bd0c097a363a81af5dc5', '5ed8bd0c097a363a81af5dcc'],
		reviews: [],
	},
	{
		owner: '5ed8bd0c097a363a81af5dc8',
		image: '../events/redbull.jpg',
		title: 'Redbull Air Style',
		beach: 'El Masnou',
		date: '2020-10-15T10:30:00.000+00:00',
		description:
			'The RAS is a competition where matter the style when you are in the air, not just jumping waves...also when you are falling. So come with us an have fun seeing the funniest falls and the most spectacular air jumps.',
		participants: [
			'5ed8bd0c097a363a81af5dc9',
			'5ed8bd0c097a363a81af5dc6',
			'5ed8bd0c097a363a81af5dc7',
			'5ed8bd0c097a363a81af5dcb',
			'5ed8bd0c097a363a81af5dcd',
		],
		reviews: [],
	},
	{
		owner: '5ed8bd0c097a363a81af5dcb',
		image: '../events/surf-day.jpg',
		title: 'Internationl surfing day',
		beach: 'Sitges',
		date: '2020-06-20T11:45:00.000+00:00',
		description:
			'Waves, sunny day, clear water and clean sand. The perfect day is waiting for us to go surfing. Are you going to miss it?',
		participants: [
			'5ed8bd0c097a363a81af5dc8',
			'5ed8bd0c097a363a81af5dca',
			'5ed8bd0c097a363a81af5dcc',
			'5ed8bd0c097a363a81af5dcd',
		],
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
