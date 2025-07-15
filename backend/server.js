import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

import userRoutes from "./routes/userRoute.js";
import claimRoutes from "./routes/claimRoute.js";
import leaderboardRoutes from "./routes/leaderboardRoute.js";

dotenv.config();
connectDb();

const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://leaderboard-web.vercel.app", // deployed frontend
];

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Leaderboard API is running..."));
app.use("/api/users", userRoutes);
app.use("/api/claim", claimRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
