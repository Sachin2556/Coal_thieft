import React from 'react';
import { AlertTriangle, Clock, MapPin, Truck, Filter } from 'lucide-react';

const Alerts = () => {
  const alerts = [
    {
      id: 'ALT-001',
      type: 'weight',
      severity: 'high',
      message: 'Significant weight discrepancy detected',
      truck: 'COL-342',
      location: 'Highway E45',
      time: '10 minutes ago'
    },
    {
      id: 'ALT-002',
      type: 'route',
      severity: 'medium',
      message: 'Route deviation detected',
      truck: 'COL-156',
      location: 'Mine Site A',
      time: '25 minutes ago'
    },
    {
      id: 'ALT-003',
      type: 'stop',
      severity: 'low',
      message: 'Extended unauthorized stop',
      truck: 'COL-278',
      location: 'Storage Facility C',
      time: '1 hour ago'
    }
  ];

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-200 text-red-700';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'low':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Active Alerts</h2>
            <p className="text-sm text-gray-600 mt-1">
              Showing all active alerts across the fleet
            </p>
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border ${getSeverityStyles(alert.severity)}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-5 w-5 mt-1" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{alert.id}</span>
                      <span className="text-sm px-2 py-0.5 rounded-full bg-white bg-opacity-50">
                        {alert.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="mt-1">{alert.message}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <Truck className="h-4 w-4" />
                        <span>{alert.truck}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 text-sm bg-white bg-opacity-50 rounded-md hover:bg-opacity-75 transition-colors">
                    Investigate
                  </button>
                  <button className="px-3 py-1.5 text-sm bg-white bg-opacity-50 rounded-md hover:bg-opacity-75 transition-colors">
                    Resolve
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

export default Alerts;
