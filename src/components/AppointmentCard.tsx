import React from 'react';
import { Clock, User, Video, MapPin } from 'lucide-react';

interface AppointmentCardProps {
  patientName: string;
  doctor: string;
  time: string;
  type: 'in-person' | 'video' | 'phone';
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  reason: string;
  duration: string;
}

export default function AppointmentCard({
  patientName,
  doctor,
  time,
  type,
  status,
  reason,
  duration
}: AppointmentCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-emerald-100 text-emerald-800';
      case 'pending':
        return 'bg-amber-100 text-amber-800';
      case 'completed':
        return 'bg-sky-100 text-sky-800';
      case 'cancelled':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'in-person':
        return <MapPin className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-semibold text-slate-900">{patientName}</h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>
          
          <p className="text-xs text-slate-600 mt-1">with {doctor}</p>
          <p className="text-xs text-slate-500 mt-1">{reason}</p>
          
          <div className="flex items-center space-x-4 mt-3">
            <div className="flex items-center text-slate-500">
              <Clock className="h-3 w-3 mr-1" />
              <span className="text-xs">{time}</span>
            </div>
            
            <div className="flex items-center text-slate-500">
              {getTypeIcon(type)}
              <span className="text-xs ml-1 capitalize">{type}</span>
            </div>
            
            <span className="text-xs text-slate-500">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}