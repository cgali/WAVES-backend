const mongoose = require('mongoose');
const reviewSchema = require('./Review');

const { Schema } = mongoose;

const eventSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		image: { type: String },
		title: {
			type: String,
			required: true,
			unique: true,
		},
		beach: { type: String, required: true },
		date: { type: Date },
		description: { type: String },
		participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		reviews: [reviewSchema],
	},

	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const Event = mongoose.model('Events', eventSchema);

module.exports = Event;
