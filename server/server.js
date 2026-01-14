import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";

connectDB();

const app = express();
app.use(cors());  // Enabling Cross-Origin Resource Sharing

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send("API is working good and fine"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
