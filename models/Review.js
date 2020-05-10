const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		title: { type: String },
		description: { type: String },
	},

	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

module.exports = reviewSchema;
