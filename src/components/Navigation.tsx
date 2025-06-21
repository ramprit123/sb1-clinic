import React from 'react'
import Dashboard from './Dashboard'
import AppointmentsPage from './AppointmentsPage'
import DoctorsPage from './DoctorsPage'
import PatientsPage from './PatientsPage'
import InvoicesPage from './InvoicesPage'
import ServicesPage from './ServicesPage'
import SettingsPage from './SettingsPage'

const navigation = [
  { id: 'dashboard', component: Dashboard },
  { id: 'appointments', component: AppointmentsPage },
  { id: 'doctors', component: DoctorsPage },
  { id: 'patients', component: PatientsPage },
  { id: 'invoices', component: InvoicesPage },
  { id: 'services', component: ServicesPage },
  { id: 'settings', component: SettingsPage },
]

interface NavigationProps {
  activeView: string
}

export default function Navigation({ activeView }: NavigationProps) {
  const ActiveComponent = navigation.find(item => item.id === activeView)?.component || Dashboard
  
  return <ActiveComponent />
}