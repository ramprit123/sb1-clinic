import React from 'react';
import StatCard from './StatCard';
import AppointmentCard from './AppointmentCard';
import DoctorCard from './DoctorCard';
import { 
  Calendar, 
  DollarSign, 
  UserCheck, 
  Clock, 
  TrendingUp,
  Bell,
  ChevronRight,
  Plus,
  Filter
} from 'lucide-react';

const statsData = [
  {
    title: "Today's Appointments",
    value: "24",
    change: "+12%",
    changeType: "increase" as const,
    icon: Calendar,
    color: "sky" as const
  },
  {
    title: "Revenue This Month",
    value: "$12,400",
    change: "+8.2%",
    changeType: "increase" as const,
    icon: DollarSign,
    color: "emerald" as const
  },
  {
    title: "Active Doctors",
    value: "8",
    change: "+2",
    changeType: "increase" as const,
    icon: UserCheck,
    color: "amber" as const
  },
  {
    title: "Pending Payments",
    value: "$3,200",
    change: "-15%",
    changeType: "decrease" as const,
    icon: Clock,
    color: "rose" as const
  }
];

const todayAppointments = [
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
  }
];

const activeDoctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Internal Medicine",
    rating: 4.9,
    experience: "12 years",
    fee: "$150",
    availability: "Available" as const,
    image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    patients: 45
  },
  {
    name: "Dr. Robert Davis",
    specialization: "Cardiology",
    rating: 4.8,
    experience: "15 years",
    fee: "$200",
    availability: "Busy" as const,
    image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    patients: 38
  },
  {
    name: "Dr. Emily Brown",
    specialization: "Pediatrics",
    rating: 4.9,
    experience: "10 years",
    fee: "$120",
    availability: "Available" as const,
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    patients: 52
  }
];

const recentActivity = [
  {
    type: "appointment",
    message: "New appointment booked with Dr. Sarah Johnson",
    time: "5 minutes ago",
    priority: "normal"
  },
  {
    type: "payment",
    message: "Payment received from Emma Wilson - $150",
    time: "15 minutes ago",
    priority: "success"
  },
  {
    type: "cancellation",
    message: "Appointment cancelled by Michael Chen",
    time: "1 hour ago",
    priority: "warning"
  },
  {
    type: "reminder",
    message: "Daily report is ready for review",
    time: "2 hours ago",
    priority: "normal"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-sky-50 to-sky-100 rounded-2xl p-8 border border-sky-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Good morning, Dr. Johnson! 👋
            </h1>
            <p className="text-slate-600 text-lg">
              You have <span className="font-semibold text-sky-700">8 appointments</span> scheduled for today
            </p>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-white text-sky-700 border border-sky-200 px-6 py-3 rounded-xl font-medium hover:bg-sky-50 transition-all duration-200 flex items-center space-x-2 shadow-sm">
              <Calendar className="h-5 w-5" />
              <span>View Schedule</span>
            </button>
            <button className="bg-sky-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-sky-700 transition-all duration-200 flex items-center space-x-2 shadow-lg">
              <Plus className="h-5 w-5" />
              <span>New Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Today's Appointments */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-sky-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Today's Schedule</h2>
                    <p className="text-sm text-slate-500">
                      {todayAppointments.length} appointments scheduled
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all duration-200">
                    <Filter className="h-5 w-5" />
                  </button>
                  <button className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center space-x-1">
                    <span>View All</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {todayAppointments.map((appointment, index) => (
                <AppointmentCard key={index} {...appointment} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 text-left border border-slate-200 rounded-xl hover:border-sky-300 hover:bg-sky-50 transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-200">
                    <Plus className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium text-slate-700">Add New Patient</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 text-left border border-slate-200 rounded-xl hover:border-sky-300 hover:bg-sky-50 transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-sky-100 rounded-lg group-hover:bg-sky-200 transition-colors duration-200">
                    <Calendar className="h-4 w-4 text-sky-600" />
                  </div>
                  <span className="font-medium text-slate-700">Schedule Appointment</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 text-left border border-slate-200 rounded-xl hover:border-sky-300 hover:bg-sky-50 transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors duration-200">
                    <TrendingUp className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="font-medium text-slate-700">Generate Report</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
              <Bell className="h-5 w-5 text-slate-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.priority === 'success' ? 'bg-emerald-500' :
                    activity.priority === 'warning' ? 'bg-amber-500' :
                    'bg-sky-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700 leading-relaxed">{activity.message}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-sky-600 hover:text-sky-700 font-medium text-sm py-2 rounded-lg hover:bg-sky-50 transition-all duration-200">
              View All Activity
            </button>
          </div>
        </div>
      </div>

      {/* Active Doctors Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <UserCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Active Doctors</h2>
                <p className="text-sm text-slate-500">
                  {activeDoctors.length} doctors currently available
                </p>
              </div>
            </div>
            <button className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center space-x-1">
              <span>View All Doctors</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeDoctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}