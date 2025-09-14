const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/orderController");

router.post("/", ctrl.createOrder);
router.get("/", ctrl.getOrders);

module.exports = router;
