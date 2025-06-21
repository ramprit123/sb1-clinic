import React from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  specialization: string;
  rating: number;
  experience: string;
  fee: string;
  availability: 'Available' | 'Busy' | 'Offline';
  image: string;
  patients: number;
}

export default function DoctorCard({
  name,
  specialization,
  rating,
  experience,
  fee,
  availability,
  image,
  patients
}: DoctorCardProps) {
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-100 text-emerald-800';
      case 'Busy':
        return 'bg-amber-100 text-amber-800';
      case 'Offline':
        return 'bg-slate-100 text-slate-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            className="h-16 w-16 rounded-full object-cover shadow-lg"
            src={image}
            alt={name}
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            availability === 'Available' ? 'bg-emerald-500' : 
            availability === 'Busy' ? 'bg-amber-500' : 
            'bg-slate-400'
          }`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 truncate">{name}</h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(availability)}`}>
              {availability}
            </span>
          </div>
          
          <p className="text-sm text-sky-600 font-medium mt-1">{specialization}</p>
          
          <div className="flex items-center mt-2 space-x-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-amber-400 fill-current" />
              <span className="text-sm font-medium text-slate-700 ml-1">{rating}</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-600 ml-1">{experience}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600 ml-1">{fee}</span>
            </div>
            
            <span className="text-sm text-slate-500">{patients} patients</span>
          </div>
        </div>
      </div>
    </div>
  );
}