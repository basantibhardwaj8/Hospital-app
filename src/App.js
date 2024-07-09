import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Component/Layout/Sidebar'
import Header from './Component/Layout/Header'
import Dashboard from './Component/Dashboard'
import PatientManagement from './Component/PatientManagement'
import AppointmentManagement from './Component/AppointmentManagement'
import InventoryManagement from './Component/InventoryManagement'
import StaffManagement from './Component/StaffManagement'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Sidebar />
        <Switch>
          <Route path='/inventoryManagement'>
            <InventoryManagement />
          </Route>
          <Route path='/appointmentManagement'>
            <AppointmentManagement />
          </Route>
          <Route path='/patientManagement'>
            <PatientManagement/>
          </Route>
          <Route path='/staffManagement'>
            <StaffManagement />
          </Route>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
