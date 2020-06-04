const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: { type: String },
		surname: { type: String },
		email: {
			type: String,
			required: true,
			unique: true,
		},
		hashedPassword: { type: String, required: true },
		image: { type: String },
		favoriteBoard: { type: String },
		level: { type: String },
		typeOfWaves: { type: Array },
		frequentsBeaches: { type: Array },
	},

	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
