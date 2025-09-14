const MenuItem = require('../models/MenuItem');
exports.getMenu = async (req,res) => {
  const items = await MenuItem.find({ available: true }).lean();
  res.json(items);
};


src/routes/menu.js

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/menuController');

router.get('/', ctrl.getMenu);

module.exports = router;