import React from 'react';

const AppointmentConfirmation = ({ doctor, time, patientName }) => {
  return (
    <div>
      <h2>Appointment Confirmed</h2>
      <p>Your appointment details:</p>
      <p><strong>Doctor:</strong> {doctor}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Patient Name:</strong> {patientName}</p>
      <p>Thank you for booking your appointment!</p>
    </div>
  );
};

export default AppointmentConfirmation;
