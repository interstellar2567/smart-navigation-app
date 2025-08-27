import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
	{
		// ✅ Core User Identity
		email: {
			type: String,
			required: true,
			unique: true,
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		// Profile Info
		firstName: String,
		lastName: String,
		profileImage: String,
		password: {
			required: true,
			type: String,
		},
		// Gamification
		points: {
			type: Number,
			default: 0,
		},
		level: {
			type: Number,
			default: 1,
		},
		rank: Number,

		// Community Stats
		reportsSubmitted: {
			type: Number,
			default: 0,
		},
		reportsVerified: {
			type: Number,
			default: 0,
		},
		accuracyRate: {
			type: Number,
			default: 100,
		},

		// Emergency Contacts
		emergencyContacts: [
			{
				name: String,
				phone: String,
				email: String,
				relationship: String,
			},
		],

		// Preferences
		preferences: {
			voiceEnabled: {
				type: Boolean,
				default: true,
			},
			notifications: {
				type: Boolean,
				default: true,
			},
			shareLocation: {
				type: Boolean,
				default: false,
			},
		},

		// Navigation History
		savedLocations: [
			{
				name: String,
				address: String,
				coordinates: {
					latitude: Number,
					longitude: Number,
				},
			},
		],
		currentLocation: {
			latitude: Number,
			longitude: Number,
			address: String,
			lastUpdated: {
				type: Date,
				default: Date.now,
			},
		},

		// Activity Tracking
		lastActive: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

// Hash password before saving
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema);
