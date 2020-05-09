const mongoose = require('mongoose');

const { Schema } = mongoose;

const beachSchema = new Schema(
	{
		name: { type: String, unique: true },
		image: { type: String },
		typesOfWaves: { type: Array },
		beachBackground: { type: Array },
		socialEnvironment: { type: String },
		description: { type: String },
		waveRate: { type: Array },
		backgroundRate: { type: Array },
		socialEnvironmentRate: { type: Array },
	},

	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const Beach = mongoose.model('Beach', beachSchema);

module.exports = Beach;
