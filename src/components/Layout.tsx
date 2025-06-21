import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Navigation from './Navigation'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  
  // Extract the active view from the current path
  const getActiveViewFromPath = (pathname: string) => {
    const path = pathname.replace('/', '')
    return path || 'dashboard'
  }
  
  const activeView = getActiveViewFromPath(location.pathname)

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        activeView={activeView}
      />
      
      <div className="lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Navigation activeView={activeView} />
          </div>
        </main>
      </div>
    </div>
  )
}