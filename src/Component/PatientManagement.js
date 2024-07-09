import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Component/patientsManagement.css'; // Adjust the path as necessary

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  useEffect(() => {
    axios.get('/api/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  const addPatient = () => {
    axios.post('http://localhost:3700/api/patients', { name, age })
      .then(response => {
        setPatients([...patients, response.data]);
        setName('');
        setAge('');
      })
      .catch(error => {
        console.error('Error adding patient: ', error);
      });
  };

  
  return (
    <div>
      <h2>Patient Management</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <button onClick={addPatient}>Add Patient</button>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>{patient.name} - {patient.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientManagement;
