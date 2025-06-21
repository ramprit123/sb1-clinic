import React, { useState } from 'react';
import { Search, Filter, Plus, Star, Clock, DollarSign, Users, MoreHorizontal } from 'lucide-react';
import DoctorCard from './DoctorCard';

const doctors = [
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
  },
  {
    name: "Dr. Michael Wilson",
    specialization: "Orthopedics",
    rating: 4.7,
    experience: "18 years",
    fee: "$180",
    availability: "Available" as const,
    image: "https://images.pexels.com/photos/6129245/pexels-photo-6129245.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    patients: 41
  },
  {
    name: "Dr. Lisa Chen",
    specialization: "Dermatology",
    rating: 4.8,
    experience: "8 years",
    fee: "$160",
    availability: "Offline" as const,
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    patients: 33
  },
  {
    name: "Dr. James Martinez",
    specialization: "Neurology",
    rating: 4.9,
    experience: "20 years",
    fee: "$220",
    availability: "Busy" as const,
    image: "https://images.pexels.com/photos/6129020/pexels-photo-6129020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    patients: 29
  }
];

export default function DoctorsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Doctors</h1>
          <p className="text-slate-600 mt-1">Manage doctor profiles and availability</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition-all duration-200 flex items-center space-x-2 shadow-lg">
          <Plus className="h-4 w-4" />
          <span>Add Doctor</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Doctors</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{doctors.length}</p>
            </div>
            <div className="p-3 bg-sky-100 rounded-xl">
              <Users className="h-6 w-6 text-sky-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Available Now</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {doctors.filter(d => d.availability === 'Available').length}
              </p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Average Rating</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">4.8</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-xl">
              <Star className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Patients</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {doctors.reduce((sum, d) => sum + d.patients, 0)}
              </p>
            </div>
            <div className="p-3 bg-rose-100 rounded-xl">
              <DollarSign className="h-6 w-6 text-rose-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search doctors..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Specializations</option>
            <option>Internal Medicine</option>
            <option>Cardiology</option>
            <option>Pediatrics</option>
            <option>Orthopedics</option>
            <option>Dermatology</option>
            <option>Neurology</option>
          </select>
          <select className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Availability</option>
            <option>Available</option>
            <option>Busy</option>
            <option>Offline</option>
          </select>
          <div className="flex bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
                viewMode === 'list' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Doctors Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Doctor</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Specialization</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Experience</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Rating</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Fee</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Patients</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {doctors.map((doctor, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={doctor.image}
                          alt={doctor.name}
                        />
                        <div>
                          <div className="text-sm font-medium text-slate-900">{doctor.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600">{doctor.specialization}</td>
                    <td className="py-4 px-6 text-sm text-slate-600">{doctor.experience}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="text-sm font-medium text-slate-700 ml-1">{doctor.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-emerald-600">{doctor.fee}</td>
                    <td className="py-4 px-6 text-sm text-slate-600">{doctor.patients}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        doctor.availability === 'Available' ? 'bg-emerald-100 text-emerald-800' :
                        doctor.availability === 'Busy' ? 'bg-amber-100 text-amber-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {doctor.availability}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors duration-200">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}