const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		reviewTitle: { type: String },
		reviewDescription: { type: String },
	},

	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

module.exports = reviewSchema;
