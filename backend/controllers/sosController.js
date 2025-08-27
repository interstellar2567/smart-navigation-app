// sosController.js
import twilio from "twilio";
import User from "../models/user.model.js";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER; // Twilio verified number

// Validate Twilio credentials
if (!accountSid || !authToken || !fromNumber) {
	console.error("Missing Twilio credentials:", {
		accountSid: !!accountSid,
		authToken: !!authToken,
		fromNumber: !!fromNumber,
		JWT_SECRET: process.env.JWT_SECRET,
		MONGO_URI: process.env.MONGO_URI,
	});
	throw new Error("Twilio credentials are missing");
}
const client = twilio(accountSid, authToken);

/**
 * Send SOS message to all emergency contacts of a user
 */

const sendSOS = async (req, res) => {
	try {
		const { latitude, longitude, userId } = req.body;

		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		if (!user.emergencyContacts?.length) {
			return res.status(400).json({ message: "No emergency contacts found" });
		}

		// Update user's current location
		await User.findByIdAndUpdate(userId, {
			currentLocation: {
				latitude,
				longitude,
				lastUpdated: new Date(),
			},
		});

		// Create Google Maps link
		const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

		// Enhanced SOS message with location
		const sosMessage =
			`🚨 EMERGENCY SOS ALERT 🚨\n\n` +
			`${user.firstName || "User"} ${user.lastName || ""} is in DANGER!\n` +
			`📍 Location: ${mapsLink}\n` +
			`📧 Email: ${user.email}\n` +
			`⏰ Time: ${new Date().toLocaleString()}\n\n` +
			`Please respond IMMEDIATELY and contact authorities if needed!`;

		// Send to all emergency contacts
		const results = await Promise.all(
			user.emergencyContacts.map(async (contact) => {
				if (!contact.phone) return null;
				return client.messages.create({
					body: sosMessage,
					from: fromNumber,
					to: contact.phone,
				});
			})
		);

		res.json({
			success: true,
			message: "Emergency SOS sent with location",
			location: { latitude, longitude, mapsLink },
			sentTo: user.emergencyContacts.length,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export { sendSOS };
