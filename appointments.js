const express = require('express');
const router = express.Router();

// Sample data for component 2
let appointments = [
  { id: '1', date: 'Component 2 Item 1 ,time:1Am' },
  { id: '2', date: 'Component 2 Item 2,time:2pm' },
];

// GET /api/component2
router.get('/', (req, res) => {
  res.json(appointments);
});

// POST /api/component2
router.post('/', (req, res) => {
  const { date,time } = req.body;

  if (!date || !time) {
    return res.status(400).json({ error: 'date  and time is required' });
  }

  const newItem = {
    id: Date.now().toString(), // Using timestamp as ID for simplicity
    date,
  };

  appointments.push(newItem);
  res.json(newItem);
});

module.exports = router;
