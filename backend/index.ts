import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import connectDB from "./config/dbConnect";

dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
