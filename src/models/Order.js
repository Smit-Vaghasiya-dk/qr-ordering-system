const mongoose = require("mongoose");
const OrderItemSchema = new mongoose.Schema({
  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
    required: true,
  },
  name: String,
  qty: { type: Number, required: true, min: 1 },
  notes: String,
  price: Number,
});
const OrderSchema = new mongoose.Schema({
  orderID: { type: String, required: true, unique: true },
  items: [OrderItemSchema],
  tableNumber: String,
  total: Number,
  status: { type: String, default: "NEW" }, // NEW, PREPARING, COMPLETED
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Order", OrderSchema);
