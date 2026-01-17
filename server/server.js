import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import mongoose from "mongoose";

import cors from "cors";
import messageRoutes from "./routes/messages.js";
import ApplicationRoutes from "./routes/applications.js";
import adminDashboardRoutes from "./routes/adminDashboardRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

  connectDB();

app.use("/api/messages", messageRoutes);
app.use("/api/applications", ApplicationRoutes);
// Admin dashboard routes
// app.use("/api/admin-dashboard", adminDashboardRoutes);
// Admin login
app.use("/api/admin", adminAuthRoutes);

// Admin dashboard endpoints
app.use("/api/admin", adminDashboardRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);








