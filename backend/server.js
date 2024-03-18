import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import msgRoutes from './routes/message.routes.js';
import connect from "./db/connect.js";

const app = express();
const PORT = process.env.PORT || 5100

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", msgRoutes);

app.get("/", (req, res) => {
    res.send("Server is ready");
});



app.listen(PORT, () => {
    connect();
	console.log(`Server Running on port ${PORT}`);
});