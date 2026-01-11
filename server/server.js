const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Ed Tech Backend is running 🚀");
});

// Routes
app.use("/api/applications", require("./routes/applications"));

// Start server (THIS keeps Node alive)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
