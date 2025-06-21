import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Filter, 
  Search, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Video,
  MapPin,
  Phone,
  User,
  MoreHorizontal
} from 'lucide-react';
import AppointmentCard from './AppointmentCard';

const appointments = [
  {
    patientName: "Emma Wilson",
    doctor: "Dr. Sarah Johnson",
    time: "09:00 AM",
    type: "in-person" as const,
    status: "confirmed" as const,
    reason: "Annual Checkup",
    duration: "30 min"
  },
  {
    patientName: "Michael Chen",
    doctor: "Dr. Robert Davis",
    time: "10:30 AM",
    type: "video" as const,
    status: "pending" as const,
    reason: "Follow-up Consultation",
    duration: "15 min"
  },
  {
    patientName: "Lisa Rodriguez",
    doctor: "Dr. Emily Brown",
    time: "11:00 AM",
    type: "in-person" as const,
    status: "confirmed" as const,
    reason: "Physical Therapy",
    duration: "45 min"
  },
  {
    patientName: "James Thompson",
    doctor: "Dr. Sarah Johnson",
    time: "02:15 PM",
    type: "phone" as const,
    status: "completed" as const,
    reason: "Test Results Review",
    duration: "20 min"
  },
  {
    patientName: "Sarah Davis",
    doctor: "Dr. Robert Davis",
    time: "03:30 PM",
    type: "video" as const,
    status: "confirmed" as const,
    reason: "Cardiology Consultation",
    duration: "30 min"
  },
  {
    patientName: "John Martinez",
    doctor: "Dr. Emily Brown",
    time: "04:00 PM",
    type: "in-person" as const,
    status: "pending" as const,
    reason: "Pediatric Checkup",
    duration: "25 min"
  }
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", 
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

export default function AppointmentsPage() {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Appointments</h1>
          <p className="text-slate-600 mt-1">Manage and schedule patient appointments</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                viewMode === 'list' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                viewMode === 'calendar' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Calendar
            </button>
          </div>
          <button className="bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition-all duration-200 flex items-center space-x-2 shadow-lg">
            <Plus className="h-4 w-4" />
            <span>New Appointment</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Doctors</option>
            <option>Dr. Sarah Johnson</option>
            <option>Dr. Robert Davis</option>
            <option>Dr. Emily Brown</option>
          </select>
          <select className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        /* List View */
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Today's Appointments</h2>
            <p className="text-sm text-slate-500 mt-1">{appointments.length} appointments scheduled</p>
          </div>
          <div className="p-6 space-y-4">
            {appointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-sky-300 hover:bg-sky-50 transition-all duration-200">
                <AppointmentCard {...appointment} />
                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-white transition-all duration-200">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Calendar View */
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Calendar View</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-sm font-medium text-slate-700">
                    {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-1">
                <div className="space-y-2">
                  {timeSlots.map((time) => (
                    <div key={time} className="h-16 flex items-center justify-end pr-4 text-sm text-slate-500">
                      {time}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-7 grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="space-y-2">
                    <div className="text-center text-sm font-medium text-slate-700 py-2">
                      {day}
                    </div>
                    {timeSlots.map((time) => (
                      <div key={time} className="h-16 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-200 relative">
                        {/* Sample appointments */}
                        {day === 'Mon' && time === '09:00' && (
                          <div className="absolute inset-1 bg-sky-100 border border-sky-300 rounded p-1">
                            <div className="text-xs font-medium text-sky-800">Emma Wilson</div>
                            <div className="text-xs text-sky-600">Dr. Johnson</div>
                          </div>
                        )}
                        {day === 'Mon' && time === '10:30' && (
                          <div className="absolute inset-1 bg-amber-100 border border-amber-300 rounded p-1">
                            <div className="text-xs font-medium text-amber-800">Michael Chen</div>
                            <div className="text-xs text-amber-600">Dr. Davis</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}