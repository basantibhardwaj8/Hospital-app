const express = require('express');
const router = express.Router();

// Sample data for component 1
let inventory = [
  { id: '1', item: 'biscuit',quantity:2 },
  { id: '2', item: 'ch 2',quantity:4 },
];

// GET /api/component1
router.get('/', (req, res) => {
  res.json(inventory);
});

// POST /api/component1
router.post('/', (req, res) => {
  const { item ,quantity } = req.body;

  if (!item || !quantity) {
    return res.status(400).json({ error: 'item  and quantity is required' });
  }

  const newItem = {
    id: Date.now().toString(), // Using timestamp as ID for simplicity
    item,
  };

  inventory.push(newItem);
  res.json(newItem);
});
module.exports = router;
