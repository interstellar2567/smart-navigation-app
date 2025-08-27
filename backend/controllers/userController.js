import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT token
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register user
const registerUser = async (req, res) => {
	try {
		const {
			email,
			password,
			firstName,
			lastName,
			profileImage,
			emergencyContacts,
		} = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "Email and password required" });
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		const user = await User.create({
			email,
			password,
			firstName,
			lastName,
			profileImage,
			emergencyContacts,
		});

		const token = generateToken(user._id);

		res.status(201).json({
			success: true,
			token,
			user: {
				id: user._id,
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
			},
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Login user
const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "Email and password required" });
		}

		const user = await User.findOne({ email });
		if (!user || !(await user.comparePassword(password))) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = generateToken(user._id);

		res.json({
			success: true,
			token,
			user: {
				id: user._id,
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
			},
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Get all users
const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({}).select("-password");
		res.json({ success: true, users });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Get user by ID
const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select("-password");
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json({ success: true, user });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update user
const updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			{ ...req.body, lastActive: new Date() },
			{ new: true, runValidators: true }
		).select("-password");

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json({ success: true, user });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Delete user
const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json({ success: true, message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export {
	registerUser,
	loginUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
};

// Update user's current location
export const updateLocation = async (req, res) => {
	try {
		const { latitude, longitude, address } = req.body;
		const userId = req.user.id; // From JWT middleware

		const user = await User.findByIdAndUpdate(
			userId,
			{
				currentLocation: {
					latitude,
					longitude,
					address,
					lastUpdated: new Date(),
				},
				lastActive: new Date(),
			},
			{ new: true }
		).select("-password");

		res.json({
			success: true,
			message: "Location updated",
			location: user.currentLocation,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
