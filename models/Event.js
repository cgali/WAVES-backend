const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema(
	{
		user_id: { type: Schema.Types.ObjectId, ref: 'User' },
		image: { type: String },
		title: {
			type: String,
			required: true,
			unique: true,
		},
		beach: { type: String, required: true },
		date: { type: Date },
		type: { type: String },
		description: { type: String },
		participants: { type: Array },
		reviews: { type: Array },
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
