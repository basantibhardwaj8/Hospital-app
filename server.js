// const express = require('express');
// const cors = require('cors');

// const component = express();
// const PORT = process.env.PORT || 3800;

// // Middleware
// component.use(cors());
// component.use(express.json());

// // Import routers
// const patientsRouter = require('./patients');
// const appointmentsRouter = require('./appointments');
//  // Corrected import for appointmentsRouter
//  const inventoryRouter = require('./inventory');
//  const staffRouter = require('./staff');

// // Use routers as middleware
// component.use('/api/inventory', inventoryRouter);
// component.use('/api/patients', patientsRouter);
// component.use('/api/appointments', appointmentsRouter); // Corrected path for appointments
// component.use('/api/staff', staffRouter);
// // Start component
// component.listen(PORT, () => {
//   console.log(`Component is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');

const component = express();
const PORT = process.env.PORT || 3700;

// Middleware
component.use(cors());
component.use(express.json());

// Import routers
const patientsRouter = require('./patients');
const appointmentsRouter = require('./appointments'); // Corrected import for appointmentsRouter
const inventoryRouter = require('./inventory');
const staffRouter = require('./Staff');

// Use routers as middleware
component.use('/api/inventory', inventoryRouter);
component.use('/api/patients', patientsRouter);
component.use('/api/appointments', appointmentsRouter); // Corrected path for appointments
component.use('/api/staff', staffRouter);

// Start component
component.listen(PORT, () => {
  console.log(`Component is running on port ${PORT}`);
});
