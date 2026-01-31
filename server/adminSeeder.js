// server/seeder.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";
import { connectDB } from "./config/db.js"; // <-- use named import

dotenv.config();
connectDB();

const seedAdmin = async () => {
  try {
    const exists = await Admin.findOne({ email: "abyzone01@gmail.com" });
    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }

    const admin = await Admin.create({
      username: "Admin",
      email: "abyzone01@gmail.com",
      password: "password123" // Will be hashed automatically
    });

    console.log("Admin created:", admin);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
