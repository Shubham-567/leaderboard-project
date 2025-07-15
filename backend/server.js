import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

import userRoutes from "./routes/userRoute.js";
import claimRoutes from "./routes/claimRoute.js";
import leaderboardRoutes from "./routes/leaderboardRoute.js";

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Leaderboard API is running..."));
app.use("/api/users", userRoutes);
app.use("/api/claim", claimRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
