import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  MoreHorizontal,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Activity,
  Clock,
  DollarSign,
  Users
} from 'lucide-react';

const services = [
  {
    id: 1,
    name: "General Consultation",
    category: "General Medicine",
    description: "Comprehensive health assessment and medical consultation",
    duration: 30,
    price: 150.00,
    doctor: "Dr. Sarah Johnson",
    icon: Stethoscope,
    color: "sky",
    availability: "Available",
    bookings: 45
  },
  {
    id: 2,
    name: "Cardiology Consultation",
    category: "Cardiology",
    description: "Heart health assessment and cardiovascular examination",
    duration: 45,
    price: 200.00,
    doctor: "Dr. Robert Davis",
    icon: Heart,
    color: "rose",
    availability: "Available",
    bookings: 32
  },
  {
    id: 3,
    name: "Pediatric Checkup",
    category: "Pediatrics",
    description: "Comprehensive health examination for children",
    duration: 30,
    price: 120.00,
    doctor: "Dr. Emily Brown",
    icon: Baby,
    color: "emerald",
    availability: "Available",
    bookings: 28
  },
  {
    id: 4,
    name: "Blood Test",
    category: "Laboratory",
    description: "Complete blood count and basic metabolic panel",
    duration: 15,
    price: 75.00,
    doctor: "Lab Technician",
    icon: Activity,
    color: "amber",
    availability: "Available",
    bookings: 67
  },
  {
    id: 5,
    name: "X-Ray Imaging",
    category: "Radiology",
    description: "Digital X-ray imaging for diagnostic purposes",
    duration: 20,
    price: 125.00,
    doctor: "Radiology Team",
    icon: Bone,
    color: "slate",
    availability: "Limited",
    bookings: 23
  },
  {
    id: 6,
    name: "Eye Examination",
    category: "Ophthalmology",
    description: "Comprehensive eye health and vision assessment",
    duration: 40,
    price: 180.00,
    doctor: "Dr. Michael Wilson",
    icon: Eye,
    color: "purple",
    availability: "Available",
    bookings: 19
  },
  {
    id: 7,
    name: "Neurological Assessment",
    category: "Neurology",
    description: "Comprehensive neurological examination and assessment",
    duration: 60,
    price: 220.00,
    doctor: "Dr. James Martinez",
    icon: Brain,
    color: "indigo",
    availability: "Limited",
    bookings: 15
  }
];

const categories = [
  "All Categories",
  "General Medicine",
  "Cardiology",
  "Pediatrics",
  "Laboratory",
  "Radiology",
  "Ophthalmology",
  "Neurology"
];

const colorVariants = {
  sky: { bg: 'bg-sky-100', text: 'text-sky-600', border: 'border-sky-200' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' }
};

export default function ServicesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredServices = selectedCategory === 'All Categories' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getAvailabilityColor = (availability: string) => {
    return availability === 'Available' 
      ? 'bg-emerald-100 text-emerald-800' 
      : 'bg-amber-100 text-amber-800';
  };

  const totalServices = services.length;
  const totalRevenue = services.reduce((sum, service) => sum + (service.price * service.bookings), 0);
  const totalBookings = services.reduce((sum, service) => sum + service.bookings, 0);
  const avgPrice = services.reduce((sum, service) => sum + service.price, 0) / services.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Services</h1>
          <p className="text-slate-600 mt-1">Manage medical services and pricing</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition-all duration-200 flex items-center space-x-2 shadow-lg">
          <Plus className="h-4 w-4" />
          <span>Add Service</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Services</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{totalServices}</p>
            </div>
            <div className="p-3 bg-sky-100 rounded-xl">
              <Stethoscope className="h-6 w-6 text-sky-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Bookings</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{totalBookings}</p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Revenue</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-xl">
              <DollarSign className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Avg. Price</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">${avgPrice.toFixed(0)}</p>
            </div>
            <div className="p-3 bg-rose-100 rounded-xl">
              <Activity className="h-6 w-6 text-rose-600" />
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
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Availability</option>
            <option>Available</option>
            <option>Limited</option>
            <option>Unavailable</option>
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

      {/* Services Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const colors = colorVariants[service.color as keyof typeof colorVariants];
            const IconComponent = service.icon;
            
            return (
              <div key={service.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${colors.bg}`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
                      <p className="text-sm text-slate-500">{service.category}</p>
                    </div>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-all duration-200">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
                
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">{service.description}</p>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.duration} minutes
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(service.availability)}`}>
                      {service.availability}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-600">
                      <Users className="h-4 w-4 mr-2" />
                      {service.bookings} bookings
                    </div>
                    <span className="text-lg font-bold text-slate-900">${service.price}</span>
                  </div>
                  
                  <div className="text-sm text-slate-500">
                    Provider: {service.doctor}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-200 flex space-x-2">
                  <button className="flex-1 bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition-all duration-200 text-sm">
                    Book Now
                  </button>
                  <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                    <Edit className="h-4 w-4 text-slate-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Service</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Category</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Duration</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Price</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Provider</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Bookings</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredServices.map((service) => {
                  const colors = colorVariants[service.color as keyof typeof colorVariants];
                  const IconComponent = service.icon;
                  
                  return (
                    <tr key={service.id} className="hover:bg-slate-50 transition-colors duration-200">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${colors.bg}`}>
                            <IconComponent className={`h-4 w-4 ${colors.text}`} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">{service.name}</div>
                            <div className="text-sm text-slate-500 truncate max-w-xs">{service.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600">{service.category}</td>
                      <td className="py-4 px-6 text-sm text-slate-600">{service.duration} min</td>
                      <td className="py-4 px-6 text-sm font-medium text-slate-900">${service.price}</td>
                      <td className="py-4 px-6 text-sm text-slate-600">{service.doctor}</td>
                      <td className="py-4 px-6 text-sm text-slate-600">{service.bookings}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(service.availability)}`}>
                          {service.availability}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-slate-400 hover:text-sky-600 rounded transition-colors duration-200">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors duration-200">
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors duration-200">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}