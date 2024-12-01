'use client'
import React from 'react'

import AccountDashboard from "../../../components/Dashboard/Dashboard";
import NavbarAndHero from '../../../components/Dashboard/Banner'


const Dashboard = () => {
  return (
      <div>
          <NavbarAndHero title='Dashboard' />
          <AccountDashboard />
    </div>
  )
}

export default Dashboard