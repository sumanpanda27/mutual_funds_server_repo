const express = require("express");
const {
  saveFund,
  getSavedFunds,
  removeFund,
} = require("../controllers/fundController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/save", authMiddleware, saveFund);
router.get("/saved", authMiddleware, getSavedFunds);
router.delete("/:id", authMiddleware, removeFund);

module.exports = router;
