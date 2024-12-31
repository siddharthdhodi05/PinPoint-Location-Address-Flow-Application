import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',  // Fixed the typo here
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/v1/user", userRoute);

// DB and port setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
