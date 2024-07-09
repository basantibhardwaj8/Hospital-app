import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const [patientId, setPatientId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    axios.get('/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error(error));
  }, []);

  const addAppointment = () => {
    axios.post('http://localhost:3700/api/appointments', { patientId, date, time })
      .then(response => setAppointments([...appointments, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Appointment Management</h2>
      <input
        type="text"
        placeholder="Patient ID"
        value={patientId}
        onChange={e => setPatientId(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={e => setTime(e.target.value)}
      />
      <button onClick={addAppointment}>Add Appointment</button>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.patientId} - {appointment.date} - {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentManagement;
