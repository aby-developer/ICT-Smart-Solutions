const mongoose = require("mongoose");
const applicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    program: { type: String, required: true },
    fee: { type: Number, required: true } // auto-assigned
  },
  { timestamps: true }
);


module.exports = mongoose.model("Application", applicationSchema);
