import express from "express";
import dotenv from "dotenv";

import authRoutes from './routes/auth.routes.js';
import connect from "./db/connect.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    connect();
	console.log(`Server Running on port ${PORT}`);
});