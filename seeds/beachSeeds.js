require('dotenv').config();

const mongoose = require('mongoose');
const Beach = require('../models/Beach');

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
		return Beach.insertMany(beaches);
	})
	.catch(err => {
		// eslint-disable-next-line no-console
		console.error('Error connecting to mongo', err);
	});

const beaches = [
	{
		name: 'Barceloneta',
		image: '../beaches/barceloneta.png',
		typesOfWaves: ['small', 'medium', 'big'],
		beachBackground: ['sand', 'rock'],
		socialEnvironment: 'good',
		description: 'Large beach with a lot of peaks. When it’s good have a strong waves with a lot of people.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dc9',
				waveRate: 4,
				backgroundRate: 3,
				socialEnvironmentRate: 3,
			},
			{
				owner: '5ed8bd0c097a363a81af5dc7',
				waveRate: 4,
				backgroundRate: 2,
				socialEnvironmentRate: 2,
			},
			{
				owner: '5ed8bd0c097a363a81af5dc8',
				waveRate: 3,
				backgroundRate: 3,
				socialEnvironmentRate: 2,
			},
		],
		reviews: [],
	},
	{
		name: 'Cabrera de Mar',
		image: '../beaches/cabrera.jpg',
		typesOfWaves: ['small'],
		beachBackground: ['Sand'],
		socialEnvironment: 'poor',
		description:
			'A small beach with 2 peaks, almost without people. Works only in stormy days or in days of big waves.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dc5',
				waveRate: 3,
				backgroundRate: 2,
				socialEnvironmentRate: 2,
			},
			{
				owner: '5ed8bd0c097a363a81af5dcc',
				waveRate: 2,
				backgroundRate: 4,
				socialEnvironmentRate: 3,
			},
		],
		reviews: [],
	},
	{
		name: 'El Masnou',
		image: '../beaches/masnou.JPG',
		typesOfWaves: ['small', 'medium', 'big'],
		beachBackground: ['Sand'],
		socialEnvironment: 'good',
		description:
			'A small beach with the harbor rocks at one side and large waves. In stormy days it`s one of the best places. Possibility of throwing you to the water at the final of rocks without almost paddleling.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dcc',
				waveRate: 5,
				backgroundRate: 4,
				socialEnvironmentRate: 4,
			},
			{
				owner: '5ed8bd0c097a363a81af5dcd',
				waveRate: 4,
				backgroundRate: 4,
				socialEnvironmentRate: 3,
			},
		],
		reviews: [],
	},
	{
		name: 'Montgat',
		image: '../beaches/montgat.JPG',
		typesOfWaves: ['small', 'medium'],
		beachBackground: ['sand', 'rock'],
		socialEnvironment: 'poor',
		description:
			'A small beach with rocks at both sides, difficult to entry and arrive at the wave peaks. Short and strong waves.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dca',
				waveRate: 3,
				backgroundRate: 1,
				socialEnvironmentRate: 1,
			},
			{
				owner: '5ed8bd0c097a363a81af5dcb',
				waveRate: 2,
				backgroundRate: 2,
				socialEnvironmentRate: 2,
			},
		],
		reviews: [],
	},
	{
		name: 'Ocata',
		image: '../beaches/ocata.jpg',
		typesOfWaves: ['small', 'medium', 'big'],
		beachBackground: ['sand', 'rock'],
		socialEnvironment: 'normal',
		description:
			'A large beach with many waves peaks. Strong waves and powerful. At some waves peaks, you could find rocks in the background.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dc7',
				waveRate: 4,
				backgroundRate: 2,
				socialEnvironmentRate: 4,
			},
			{
				owner: '5ed8bd0c097a363a81af5dcc',
				waveRate: 4,
				backgroundRate: 3,
				socialEnvironmentRate: 3,
			},
		],
		reviews: [],
	},
	{
		name: 'Palamós',
		image: '../beaches/palamos.JPG',
		typesOfWaves: ['small', 'medium'],
		beachBackground: ['sand'],
		socialEnvironment: 'normal',
		description:
			'Beach localized in a creek behind the forest. It is difficult to access but when it works it is really nice to be there surfing waves.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dc7',
				waveRate: 3,
				backgroundRate: 2,
				socialEnvironmentRate: 2,
			},
			{
				owner: '5ed8bd0c097a363a81af5dcd',
				waveRate: 4,
				backgroundRate: 2,
				socialEnvironmentRate: 3,
			},
		],
		reviews: [],
	},
	{
		name: 'Salou',
		image: '../beaches/salou.jpg',
		typesOfWaves: ['small', 'medium'],
		beachBackground: ['sand'],
		socialEnvironment: 'normal',
		description:
			'Near Cap de Salou and the harbor of Tarragona, is one of the most popular places to go surfing in Costa Daurada. Open to the sea, always receive the swell directly, so maybe it is difficult to arrive at the wave peak when it is a stormy day.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dc6',
				waveRate: 2,
				backgroundRate: 3,
				socialEnvironmentRate: 4,
			},
			{
				owner: '5ed8bd0c097a363a81af5dca',
				waveRate: 2,
				backgroundRate: 2,
				socialEnvironmentRate: 4,
			},
		],
		reviews: [],
	},
	{
		name: 'Sitges',
		image: '../beaches/sitges.jpg',
		typesOfWaves: ['small'],
		beachBackground: ['sand'],
		socialEnvironment: 'good',
		description:
			'The beach is very large with a lot of waves peaks. Also, you can see at the promenade the surfers at the water. So it is one of the most crowded places to enjoy seeing people surfing and take photos.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dca',
				waveRate: 3,
				backgroundRate: 2,
				socialEnvironmentRate: 2,
			},
			{
				owner: '5ed8bd0c097a363a81af5dcd',
				waveRate: 2,
				backgroundRate: 2,
				socialEnvironmentRate: 3,
			},
		],
		reviews: [],
	},
	{
		name: 'Vilassar de Mar',
		image: '../beaches/vilassar.jpg',
		typesOfWaves: ['small', 'medium'],
		beachBackground: ['rocks'],
		socialEnvironment: 'normal',
		description:
			'It is the typical fishing beach. With rocks at one side and in the background. In the past fishers used it to throw their boats. Now is a beach for users. The waves aren`t too heavy but with a bad fall, you can break your board.',
		rate: [
			{
				owner: '5ed8bd0c097a363a81af5dc5',
				waveRate: 3,
				backgroundRate: 2,
				socialEnvironmentRate: 2,
			},
			{
				owner: '5ed8bd0c097a363a81af5dcb',
				waveRate: 3,
				backgroundRate: 1,
				socialEnvironmentRate: 2,
			},
		],
		reviews: [],
	},
];

Beach.create(beaches, err => {
	if (err) {
		throw err;
	}
	// eslint-disable-next-line no-console
	console.log(`Created ${beaches.length} beaches`);
	mongoose.connection.close();
});
