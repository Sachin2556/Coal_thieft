import React from 'react';
import { Truck, MapPin, Clock, AlertTriangle } from 'lucide-react';

const LiveTracking = () => {
  const trucks = [
    {
      id: 'COL-342',
      status: 'active',
      location: 'Mine Site A',
      destination: 'Port Terminal B',
      eta: '2h 15m',
      weight: '28.5',
      alerts: 0
    },
    {
      id: 'COL-156',
      status: 'warning',
      location: 'Highway E45',
      destination: 'Storage Facility C',
      eta: '1h 45m',
      weight: '27.8',
      alerts: 1
    },
    {
      id: 'COL-278',
      status: 'inactive',
      location: 'Maintenance Bay',
      destination: '-',
      eta: '-',
      weight: '0',
      alerts: 0
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Live Fleet Status</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Active: 18
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Warning: 3
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              Inactive: 3
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {trucks.map((truck) => (
            <div 
              key={truck.id}
              className={`p-4 rounded-lg border ${
                truck.status === 'active' ? 'border-green-200 bg-green-50' :
                truck.status === 'warning' ? 'border-yellow-200 bg-yellow-50' :
                'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-center">
                <div className="flex items-center space-x-3">
                  <Truck className={`h-5 w-5 ${
                    truck.status === 'active' ? 'text-green-600' :
                    truck.status === 'warning' ? 'text-yellow-600' :
                    'text-gray-600'
                  }`} />
                  <div>
                    <p className="font-medium">{truck.id}</p>
                    <p className="text-sm text-gray-600">
                      {truck.status.charAt(0).toUpperCase() + truck.status.slice(1)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{truck.location}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{truck.destination}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">ETA: {truck.eta}</span>
                </div>

                <div className="text-sm">
                  <span className="font-medium">{truck.weight}</span>
                  <span className="text-gray-600"> tonnes</span>
                </div>

                <div className="flex items-center justify-end space-x-2">
                  {truck.alerts > 0 && (
                    <span className="flex items-center space-x-1 px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      <AlertTriangle className="h-4 w-4" />
                      <span>{truck.alerts} Alert</span>
                    </span>
                  )}
                  <button className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
