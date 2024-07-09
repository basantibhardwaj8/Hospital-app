import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    axios.get('/api/staff')
      .then(response => setStaff(response.data))
      .catch(error => console.error(error));
  }, []);

  const addStaff = () => {
    axios.post('http://localhost:3700/api/staff', { name, role })
      .then(response => setStaff([...staff, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Staff Management</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={e => setRole(e.target.value)}
      />
      <button onClick={addStaff}>Add Staff</button>
      <ul>
        {staff.map(member => (
          <li key={member.id}>{member.name} - {member.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default StaffManagement;
