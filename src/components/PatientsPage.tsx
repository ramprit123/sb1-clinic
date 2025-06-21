import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Phone, 
  Mail, 
  Calendar,
  MapPin,
  User,
  Heart,
  AlertCircle,
  Clock,
  FileText,
  Edit,
  Trash2
} from 'lucide-react';

const patients = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "+1 (555) 123-4567",
    age: 34,
    gender: "Female",
    bloodType: "A+",
    lastVisit: "2024-01-15",
    nextAppointment: "2024-01-22",
    doctor: "Dr. Sarah Johnson",
    condition: "Hypertension",
    status: "Active",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    address: "123 Main St, New York, NY 10001",
    emergencyContact: "John Wilson - +1 (555) 987-6543",
    insurance: "Blue Cross Blue Shield",
    allergies: ["Penicillin", "Shellfish"]
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 (555) 234-5678",
    age: 42,
    gender: "Male",
    bloodType: "O-",
    lastVisit: "2024-01-10",
    nextAppointment: "2024-01-25",
    doctor: "Dr. Robert Davis",
    condition: "Diabetes Type 2",
    status: "Active",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    address: "456 Oak Ave, Los Angeles, CA 90210",
    emergencyContact: "Lisa Chen - +1 (555) 876-5432",
    insurance: "Aetna",
    allergies: ["None"]
  },
  {
    id: 3,
    name: "Sarah Davis",
    email: "sarah.davis@email.com",
    phone: "+1 (555) 345-6789",
    age: 28,
    gender: "Female",
    bloodType: "B+",
    lastVisit: "2024-01-12",
    nextAppointment: "2024-01-20",
    doctor: "Dr. Emily Brown",
    condition: "Pregnancy - 2nd Trimester",
    status: "Active",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    address: "789 Pine St, Chicago, IL 60601",
    emergencyContact: "Mark Davis - +1 (555) 765-4321",
    insurance: "Cigna",
    allergies: ["Latex"]
  },
  {
    id: 4,
    name: "James Thompson",
    email: "james.thompson@email.com",
    phone: "+1 (555) 456-7890",
    age: 56,
    gender: "Male",
    bloodType: "AB+",
    lastVisit: "2024-01-08",
    nextAppointment: "2024-01-28",
    doctor: "Dr. Sarah Johnson",
    condition: "Arthritis",
    status: "Inactive",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    address: "321 Elm St, Houston, TX 77001",
    emergencyContact: "Mary Thompson - +1 (555) 654-3210",
    insurance: "United Healthcare",
    allergies: ["Aspirin"]
  }
];

export default function PatientsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const getStatusColor = (status: string) => {
    return status === 'Active' 
      ? 'bg-emerald-100 text-emerald-800' 
      : 'bg-slate-100 text-slate-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Patients</h1>
          <p className="text-slate-600 mt-1">Manage patient records and medical history</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition-all duration-200 flex items-center space-x-2 shadow-lg">
          <Plus className="h-4 w-4" />
          <span>Add Patient</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Patients</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{patients.length}</p>
            </div>
            <div className="p-3 bg-sky-100 rounded-xl">
              <User className="h-6 w-6 text-sky-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Active Patients</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {patients.filter(p => p.status === 'Active').length}
              </p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Heart className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Critical Cases</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">2</p>
            </div>
            <div className="p-3 bg-rose-100 rounded-xl">
              <AlertCircle className="h-6 w-6 text-rose-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Appointments Today</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">8</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-xl">
              <Calendar className="h-6 w-6 text-amber-600" />
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
              placeholder="Search patients..."
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
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <div className="flex bg-slate-100 rounded-lg p-1">
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
          </div>
        </div>
      </div>

      {/* Patients List/Grid */}
      {viewMode === 'list' ? (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Patient</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Contact</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Age/Gender</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Doctor</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Condition</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Last Visit</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-slate-50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={patient.avatar}
                          alt={patient.name}
                        />
                        <div>
                          <div className="text-sm font-medium text-slate-900">{patient.name}</div>
                          <div className="text-sm text-slate-500">ID: {patient.id.toString().padStart(4, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-slate-900">{patient.phone}</div>
                      <div className="text-sm text-slate-500">{patient.email}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-slate-900">{patient.age} years</div>
                      <div className="text-sm text-slate-500">{patient.gender}</div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600">{patient.doctor}</td>
                    <td className="py-4 px-6 text-sm text-slate-600">{patient.condition}</td>
                    <td className="py-4 px-6 text-sm text-slate-600">{patient.lastVisit}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(patient.status)}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => setSelectedPatient(patient)}
                          className="p-1 text-slate-400 hover:text-sky-600 rounded transition-colors duration-200"
                        >
                          <FileText className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors duration-200">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors duration-200">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {patients.map((patient) => (
            <div key={patient.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-16 w-16 rounded-full object-cover shadow-lg"
                    src={patient.avatar}
                    alt={patient.name}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{patient.name}</h3>
                    <p className="text-sm text-slate-500">ID: {patient.id.toString().padStart(4, '0')}</p>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-2 ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-all duration-200">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm text-slate-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {patient.phone}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {patient.email}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <User className="h-4 w-4 mr-2" />
                  {patient.age} years, {patient.gender}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Heart className="h-4 w-4 mr-2" />
                  {patient.condition}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
                <span className="text-sm text-slate-500">Last visit: {patient.lastVisit}</span>
                <button 
                  onClick={() => setSelectedPatient(patient)}
                  className="text-sky-600 hover:text-sky-700 font-medium text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Patient Detail Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-16 w-16 rounded-full object-cover shadow-lg"
                    src={selectedPatient.avatar}
                    alt={selectedPatient.name}
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{selectedPatient.name}</h2>
                    <p className="text-slate-600">Patient ID: {selectedPatient.id.toString().padStart(4, '0')}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPatient(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-all duration-200"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Personal Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Age:</span>
                      <span className="font-medium">{selectedPatient.age} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Gender:</span>
                      <span className="font-medium">{selectedPatient.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Blood Type:</span>
                      <span className="font-medium">{selectedPatient.bloodType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Phone:</span>
                      <span className="font-medium">{selectedPatient.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Email:</span>
                      <span className="font-medium">{selectedPatient.email}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Medical Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Primary Doctor:</span>
                      <span className="font-medium">{selectedPatient.doctor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Condition:</span>
                      <span className="font-medium">{selectedPatient.condition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Last Visit:</span>
                      <span className="font-medium">{selectedPatient.lastVisit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Next Appointment:</span>
                      <span className="font-medium">{selectedPatient.nextAppointment}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact & Insurance</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-slate-600 block">Address:</span>
                      <span className="font-medium">{selectedPatient.address}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 block">Emergency Contact:</span>
                      <span className="font-medium">{selectedPatient.emergencyContact}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 block">Insurance:</span>
                      <span className="font-medium">{selectedPatient.insurance}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Allergies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPatient.allergies.map((allergy: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-rose-100 text-rose-800 text-sm rounded-full">
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}