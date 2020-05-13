const mongoose = require('mongoose');
const reviewSchema = require('./Review');

const { Schema } = mongoose;

const beachSchema = new Schema(
	{
		name: { type: String, unique: true },
		image: { type: String },
		typesOfWaves: { type: Array },
		beachBackground: { type: Array },
		socialEnvironment: { type: String },
		description: { type: String },
		rate: [
			{
				owner: { type: Schema.Types.ObjectId, ref: 'User', unique: true },
				waveRate: { type: Number },
				backgroundRate: { type: Number },
				socialEnvironmentRate: { type: Number },
			},
		],
		reviews: [reviewSchema],
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
