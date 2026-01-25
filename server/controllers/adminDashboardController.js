import {Application} from "../models/Application.js"; // ✅ FIXED
import Message from "../models/Message.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

/* ================= DASHBOARD ================= */
export const getDashboardStats = async (req, res) => {
  try {
    const totalApplications = await Application.countDocuments();
    const pendingApplications = await Application.countDocuments({ status: "Pending" });
    const totalMessages = await Message.countDocuments();
    const unreadMessages = await Message.countDocuments({ isRead: false });

    res.json({
      totalApplications,
      pendingApplications,
      totalMessages,
      unreadMessages
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Dashboard data error" });
  }
};

/* ================= APPLICATIONS ================= */
export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid ID" });

    const application = await Application.findById(id);
    if (!application)
      return res.status(404).json({ message: "Application not found" });

    application.status = status;
    await application.save();

    res.json({ success: true, message: "Application status updated" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ success: false, message: "Invalid application ID" });

    const application = await Application.findByIdAndDelete(id);
    if (!application)
      return res.status(404).json({ success: false, message: "Application not found" });

    res.json({ success: true, message: "Application deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/* ================= MESSAGES ================= */
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const markMessageRead = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid ID" });

    const message = await Message.findById(id);
    if (!message)
      return res.status(404).json({ message: "Message not found" });

    message.isRead = true;
    await message.save();

    res.json({ success: true, message: "Message marked as read" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ success: false, message: "Invalid message ID" });

    const message = await Message.findByIdAndDelete(id);
    if (!message)
      return res.status(404).json({ success: false, message: "Message not found" });

    res.json({ success: true, message: "Message deleted successfully" });
  } catch {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/* ================= ADMIN PROFILE ================= */
export const getAdminProfile = async (req, res) => {
  res.json({ success: true, admin: req.admin });
};

export const updateAdminInfo = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);
    if (!admin)
      return res.status(404).json({ success: false, message: "Admin not found" });

    const { username, email } = req.body;
    if (username) admin.username = username;
    if (email) admin.email = email;

    await admin.save();
    res.json({ success: true, message: "Admin info updated" });
  } catch {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const changeAdminPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const admin = await Admin.findById(req.admin._id);
    if (!admin)
      return res.status(404).json({ success: false, message: "Admin not found" });

    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch)
      return res.status(401).json({ success: false, message: "Old password incorrect" });

    admin.password = newPassword;
    await admin.save();

    res.json({ success: true, message: "Password changed successfully" });
  } catch {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

