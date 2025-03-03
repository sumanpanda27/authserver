import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ["http://localhost:5173"] || [
  "https://authclient-q0x8.onrender.com",
];

import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// API Endpoint
app.get("/", (req, res) => {
  res.send("API working");
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server started on port:${port}`);
});
