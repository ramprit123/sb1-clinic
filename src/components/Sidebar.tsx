import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BarChart3,
  Calendar,
  Users,
  UserCheck,
  FileText,
  Stethoscope,
  Settings,
  X,
  Heart,
  LogOut
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  activeView: string
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: BarChart3, path: '/dashboard' },
  { id: 'appointments', name: 'Appointments', icon: Calendar, path: '/appointments' },
  { id: 'doctors', name: 'Doctors', icon: UserCheck, path: '/doctors' },
  { id: 'patients', name: 'Patients', icon: Users, path: '/patients' },
  { id: 'invoices', name: 'Invoices', icon: FileText, path: '/invoices' },
  { id: 'services', name: 'Services', icon: Stethoscope, path: '/services' },
  { id: 'settings', name: 'Settings', icon: Settings, path: '/settings' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeView }: SidebarProps) {
  const navigate = useNavigate()
  const { signOut, profile } = useAuth()

  const handleNavClick = (path: string) => {
    navigate(path)
    setSidebarOpen(false) // Close mobile sidebar when navigating
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/signin')
  }

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="relative z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
          
          <div className="fixed inset-0 flex">
            <div className="relative mr-16 flex w-full max-w-xs flex-1">
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button
                  type="button"
                  className="-m-2.5 p-2.5"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 shadow-xl">
                <div className="flex h-16 shrink-0 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-slate-900">ClinicPro</h1>
                      <p className="text-xs text-slate-500">Healthcare Management</p>
                    </div>
                  </div>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => handleNavClick(item.path)}
                              className={classNames(
                                activeView === item.id
                                  ? 'bg-sky-50 text-sky-700 border-r-2 border-sky-600'
                                  : 'text-slate-700 hover:text-sky-700 hover:bg-sky-50',
                                'group flex gap-x-3 rounded-l-lg p-3 text-sm leading-6 font-medium transition-all duration-200 ease-in-out w-full text-left'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  activeView === item.id ? 'text-sky-600' : 'text-slate-400 group-hover:text-sky-600',
                                  'h-5 w-5 shrink-0 transition-colors duration-200'
                                )}
                              />
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      {profile && (
                        <div className="p-3 border-t border-slate-200">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                {profile.first_name?.[0]}{profile.last_name?.[0]}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-900 truncate">
                                {profile.first_name} {profile.last_name}
                              </p>
                              <p className="text-xs text-slate-500 capitalize">{profile.role}</p>
                            </div>
                          </div>
                          <button
                            onClick={handleSignOut}
                            className="flex items-center space-x-2 w-full p-2 text-sm text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200"
                          >
                            <LogOut className="h-4 w-4" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 shadow-lg border-r border-slate-200">
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">ClinicPro</h1>
                <p className="text-xs text-slate-500">Healthcare Management</p>
              </div>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className={classNames(
                          activeView === item.id
                            ? 'bg-sky-50 text-sky-700 border-r-2 border-sky-600'
                            : 'text-slate-700 hover:text-sky-700 hover:bg-sky-50',
                          'group flex gap-x-3 rounded-l-lg p-3 text-sm leading-6 font-medium transition-all duration-200 ease-in-out w-full text-left'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            activeView === item.id ? 'text-sky-600' : 'text-slate-400 group-hover:text-sky-600',
                            'h-5 w-5 shrink-0 transition-colors duration-200'
                          )}
                        />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                {profile && (
                  <div className="p-3 border-t border-slate-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {profile.first_name?.[0]}{profile.last_name?.[0]}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">
                          {profile.first_name} {profile.last_name}
                        </p>
                        <p className="text-xs text-slate-500 capitalize">{profile.role}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-2 w-full p-2 text-sm text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}