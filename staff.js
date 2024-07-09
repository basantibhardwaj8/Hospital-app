const express = require('express');
const router = express.Router();

// Sample data for component 1
let staff = [
  { id: '1', name: 'basanti', role: 'doctor' },
  { id: '2', name: 'ch 2', role: 'compounder' },
];

// GET /api/component1
router.get('/', (req, res) => {
  res.json(staff);
});

// POST /api/component1
router.post('/', (req, res) => {
  const { name, role } = req.body;

  // Validation: Check if name and role are provided
  if (!name || !role) {
    return res.status(400).json({ error: 'Name and role are required' });
  }

  // Create new staff member object
  const newStaff = {
    id: Date.now().toString(), // Using timestamp as ID for simplicity
    name,
    role,
  };

  // Add new staff member to the array
  staff.push(newStaff);

  // Respond with the newly added staff member
  res.status(201).json(newStaff);
});

module.exports = router;
