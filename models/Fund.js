const mongoose = require("mongoose");

const FundSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  schemeCode: { type: String, required: true },
  schemeName: { type: String, required: true },
});

module.exports = mongoose.model("Fund", FundSchema);
