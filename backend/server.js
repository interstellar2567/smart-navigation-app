// Move this to the very top before any imports
import dotenv from "dotenv";
import "dotenv/config";

// Now add your other imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/connectDB.js";
import sosRoutes from "./routes/sosRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import viewRouter from "./routes/ViewRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/sos", sosRoutes);

// Add this line with other route uses
app.use("/api/users", userRoutes);

//VR Routes
app.use("/api/view", viewRouter);
// Basic route for testing
app.get("/", (req, res) => {
	res.send("Smart Navigation Backend is running");
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
