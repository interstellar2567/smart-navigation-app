// routes/userRouter.js
import express from "express";
import {
	registerUser,
	loginUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
	updateLocation,
} from "../controllers/userController.js";

import { protect } from "../middleware/auth.js";
// <-- middleware that verifies JWT and sets req.user (you should already have this)

const router = express.Router();

// 🔹 Auth
router.post("/register", registerUser);
router.post("/login", loginUser);

// 🔹 Users
router.get("/", protect, getAllUsers); // GET all users (protected)
router.get("/:id", protect, getUserById); // GET user by ID (protected)
router.put("/:id", protect, updateUser); // Update user by ID (protected)
router.delete("/:id", protect, deleteUser); // Delete user by ID (protected)

// 🔹 Location
router.put("/me/location", protect, updateLocation); // Update current logged-in user's location

export default router;
