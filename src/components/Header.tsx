import React from 'react'
import { Menu, Search, Bell, User } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  const { profile } = useAuth()

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-slate-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-slate-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>
      
      <div className="h-6 w-px bg-slate-200 lg:hidden" />
      
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="relative flex flex-1 items-center">
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="search"
              placeholder="Search patients, appointments..."
              className="block w-full rounded-lg border-0 bg-slate-50 py-2 pl-10 pr-3 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:ring-2 focus:ring-sky-500 sm:text-sm transition-all duration-200"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-slate-400 hover:text-slate-500 relative"
          >
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-medium">3</span>
            </span>
          </button>
          
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-200" />
          
          <div className="flex items-center gap-x-3">
            {profile && (
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-slate-900">
                  {profile.first_name} {profile.last_name}
                </p>
                <p className="text-xs text-slate-500 capitalize">{profile.role}</p>
              </div>
            )}
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 flex items-center justify-center shadow-lg">
              {profile ? (
                <span className="text-white text-sm font-medium">
                  {profile.first_name?.[0]}{profile.last_name?.[0]}
                </span>
              ) : (
                <User className="h-5 w-5 text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}