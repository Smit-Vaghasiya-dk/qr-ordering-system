const Order = require("../models/Order");
const { v4: uuidv4 } = require("uuid");

exports.createOrder = async (req, res) => {
  try {
    const { items, tableNumber, total } = req.body;
    if (!items || !items.length)
      return res.status(400).json({ error: "No items" });
    const orderID = uuidv4().split("-")[0].toUpperCase(); // short id
    const order = new Order({ orderID, items, tableNumber, total });
    await order.save();
    return res.status(201).json({ orderID, status: "created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 }).lean();
  res.json(orders);
};
