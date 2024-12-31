import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/user.route.js";
import addressRoute from "./routes/address.route.js";  // Import the address route
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',  // Adjust to your frontend URL
  credentials: true,
};

app.use(cors(corsOptions));

// Use routes
app.use("/api/v1/user", userRoute);  // User route
app.use("/api/v1/address", addressRoute);  // Address route

// DB connection and server setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();  // Initialize the DB connection
  console.log(`Server running on port ${PORT}`);
});
