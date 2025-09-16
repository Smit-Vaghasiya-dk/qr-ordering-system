// routes/menu.js

const express = require('express');
const router = express.Router();

// Example: GET /api/menu  -> returns a sample menu
router.get('/', (req, res) => {
  // Replace this with a DB call in real use
  const sampleMenu = [
    { id: 1, name: 'Margherita', price: 9.5 },
    { id: 2, name: 'Pepperoni', price: 10.5 },
    { id: 3, name: 'Veggie', price: 11.0 },
  ];
  res.json(sampleMenu);
});

// Example: GET /api/menu/:id  -> single menu item
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  // placeholder lookup
  const item = { id, name: `Sample item ${id}`, price: 9.99 };
  res.json(item);
});

// Add more menu routes (create, update, delete) as needed

module.exports = router;
