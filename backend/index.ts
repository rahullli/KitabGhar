import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/dbConnect";
import authRoutes from "./routes/authRouter";

// ✅ Load environment variables first
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

// ✅ CORS Configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};
app.use(cors(corsOptions));

// ✅ Body Parsing Middleware
app.use(express.json());  // Parse JSON requests
app.use(express.urlencoded({ extended: true }));  // Parse form data
app.use(cookieParser());  // Parse cookies

// ✅ Connect to Database
connectDB();

// ✅ API Routes
app.use("/api/auth", authRoutes);

// ✅ Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
