const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema(
	{
		user_id: { type: Schema.Types.ObjectId, ref: 'User' },
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

const Review = mongoose.model('User', reviewSchema);

module.exports = Review;
