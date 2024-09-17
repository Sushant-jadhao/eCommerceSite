const express = require("express");
const {
  createOrder,
  updateOrder,
  getOrders,
} = require("../controllers/orderController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.put("/:id", authMiddleware, updateOrder);
router.get("/", authMiddleware, getOrders);

module.exports = router;
