// const express = require('express');
// const router = express.Router();

// // Sample data for component 1
// let patients = [
//   { id: '1', name: 'basanti', 'age:2' },
//   { id: '2', name: 'Component 1 Item 2,age:4' },
// ];

// // GET /api/component1
// router.get('/', (req, res) => {
//   res.json(patients);
// });

// // POST /api/component1
// router.post('/', (req, res) => {
//   const { name ,age } = req.body;

//   if (!name || !age) {
//     return res.status(400).json({ error: 'Name  and age is required' });
//   }

//   const newItem = {
//     id: Date.now().toString(), // Using timestamp as ID for simplicity
//     name,
//   };

//   patients.push(newItem);
//   res.json(newItem);
// });

// module.exports = router;
const express = require('express');
const router = express.Router();

// Sample data for component 1
let patients = [
  { id: '1', name: 'basanti', age: 2 },
  { id: '2', name: 'Component 1 Item 2', age: 4 },
];

// GET /api/component1
router.get('/', (req, res) => {
  res.json(patients);
});

// POST /api/component1
router.post('/', (req, res) => {
  const { name, age } = req.body;

  // Validation: Check if name and age are provided
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  // Create new patient object
  const newPatient = {
    id: Date.now().toString(), // Using timestamp as ID for simplicity
    name,
    age,
  };

  // Add new patient to the array
  patients.push(newPatient);

  // Respond with the newly added patient
  res.status(201).json(newPatient);
});

module.exports = router;
