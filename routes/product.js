// routes/product.js
const express = require("express");
const router = express.Router();
const { adminAuth } = require("../middleware/authMiddleware");

// Sample route for admin to create a product
router.post("/create", adminAuth, (req, res) => {
  // Logic for creating a product (can add to database here)
  res.status(200).json({ msg: "Product created by admin" });
});

// Users can view products, no auth required
router.get("/view", (req, res) => {
  // Logic for viewing products (fetch from database)
  res.status(200).json({ msg: "Product list" });
});

module.exports = router;
