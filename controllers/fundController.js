const Fund = require("../models/Fund.js");

exports.saveFund = async (req, res) => {
  try {
    const { schemeCode, schemeName } = req.body;
    const existing = await Fund.findOne({ userId: req.user.id, schemeCode });
    if (existing)
      return res.status(400).json({ message: "Fund already saved" });

    const fund = await Fund.create({
      userId: req.user.id,
      schemeCode,
      schemeName,
    });
    res.status(201).json(fund);
  } catch (err) {
    res.status(500).json({ error: "Failed to save fund" });
  }
};

exports.getSavedFunds = async (req, res) => {
  try {
    const funds = await Fund.find({ userId: req.user.id });
    res.json(funds);
  } catch {
    res.status(500).json({ error: "Failed to fetch funds" });
  }
};

exports.removeFund = async (req, res) => {
  try {
    await Fund.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: "Fund removed" });
  } catch {
    res.status(500).json({ error: "Failed to remove fund" });
  }
};
