require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../models/User');

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
		return User.insertMany(users);
	})
	.catch(err => {
		// eslint-disable-next-line no-console
		console.error('Error connecting to mongo', err);
	});

const users = [
	{
		name: 'Bethanie',
		surname: 'Monroe',
		email: 'bethanie@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/beth.jpg',
		favoriteBoard: 'Bic Minimalibú 7 6"',
		level: 'Amateur',
		typeOfWaves: ['small'],
		frequentsBeaches: ['Vilassar de Mar'],
		myEvents: [],
		events: [],
	},
	{
		name: 'James',
		surname: 'Jackson',
		email: 'james@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/james.jpg',
		favoriteBoard: 'Webber Semi Gun 8 2"',
		level: 'Expert',
		typeOfWaves: ['medium', 'big'],
		frequentsBeaches: ['Barceloneta', 'Salou'],
		myEvents: [],
		events: [],
	},
	{
		name: 'Johao',
		surname: 'Pereira',
		email: 'johao@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/johao.jpg',
		favoriteBoard: 'DHD Ducksnuts 6 1"',
		level: 'Experienced',
		typeOfWaves: ['small', 'medium'],
		frequentsBeaches: ['Palamós', 'Ocata'],
		myEvents: [],
		events: [],
	},
	{
		name: 'John John',
		surname: 'Florence',
		email: 'florence@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/john-john-florence.jpg',
		favoriteBoard: 'Pyzel Shadow 6 3"',
		level: 'Professional',
		typeOfWaves: ['small', 'medium', 'big'],
		frequentsBeaches: ['Barceloneta', 'El Masnou', 'Sitges'],
		myEvents: [],
		events: [],
	},
	{
		name: 'Kelly',
		surname: 'Salter',
		email: 'kelly@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/kelly.jpeg',
		favoriteBoard: 'Firewire Sci-Fi 5 10"',
		level: 'Professional',
		typeOfWaves: ['small', 'medium', 'big'],
		frequentsBeaches: ['Barceloneta', 'Sitges'],
		myEvents: [],
		events: [],
	},
	{
		name: 'Lisa',
		surname: 'Shutter',
		email: 'lisa@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/lisa.jpg',
		favoriteBoard: 'Webber Punch 6 0"',
		level: 'Expert',
		typeOfWaves: ['medium', 'big'],
		frequentsBeaches: ['Salou', 'Sitges', 'Barceloneta'],
		myEvents: [],
		events: [],
	},
	{
		name: 'Mariona',
		surname: 'Ruiz',
		email: 'mariona@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/mariona.jpg',
		favoriteBoard: 'Duranbah Shortboard 5 8"',
		level: 'Expert',
		typeOfWaves: ['small', 'medium'],
		frequentsBeaches: ['Montgat', 'Vilassar de Mar'],
		myEvents: [],
		events: [],
	},
	{
		name: 'Michael',
		surname: 'Medina',
		email: 'michael@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/michale.jpg',
		favoriteBoard: 'Bradley CB1 6 4"',
		level: 'Expert',
		typeOfWaves: ['small', 'medium'],
		frequentsBeaches: ['Barceloneta', 'Ocata'],
		myEvents: [],
		events: [],
	},
	{
		name: 'Stephanie',
		surname: 'Gilmore',
		email: 'stephanie@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../surfers/stephanie.jpg',
		favoriteBoard: 'DHD 3DX 6 1"',
		level: 'Professional',
		typeOfWaves: ['small', 'medium', 'big'],
		frequentsBeaches: ['Barceloneta', 'Ocata', 'El Masnou'],
		myEvents: [],
		events: [],
	},
];

User.create(users, err => {
	if (err) {
		throw err;
	}
	// eslint-disable-next-line no-console
	console.log(`Created ${users.length} users`);
	mongoose.connection.close();
});
