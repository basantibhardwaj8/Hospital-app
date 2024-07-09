import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/staff">Staff</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
