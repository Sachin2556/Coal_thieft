import React from 'react';
import { Truck, AlertTriangle, TrendingUp, MapPin } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Active Trucks',
      value: '24',
      change: '+2',
      icon: Truck,
      color: 'bg-blue-500'
    },
    {
      title: 'Alerts Today',
      value: '3',
      change: '-1',
      icon: AlertTriangle,
      color: 'bg-red-500'
    },
    {
      title: 'Efficiency Rate',
      value: '98.5%',
      change: '+0.5%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Active Routes',
      value: '12',
      change: '0',
      icon: MapPin,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <div className="flex items-center mt-2">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className={`ml-2 text-sm ${
                    stat.change.startsWith('+') ? 'text-green-500' : 
                    stat.change.startsWith('-') ? 'text-red-500' : 
                    'text-gray-500'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
          <div className="space-y-4">
            {[
              { time: '10:45 AM', message: 'Unexpected weight change detected - Truck ID: COL-342', type: 'warning' },
              { time: '09:30 AM', message: 'Route deviation alert - Truck ID: COL-156', type: 'alert' },
              { time: '08:15 AM', message: 'Extended stop duration - Truck ID: COL-278', type: 'info' }
            ].map((alert, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50">
                <AlertTriangle className={`h-5 w-5 ${
                  alert.type === 'warning' ? 'text-yellow-500' :
                  alert.type === 'alert' ? 'text-red-500' :
                  'text-blue-500'
                }`} />
                <div>
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
          <div className="space-y-4">
            {[
              { label: 'Route Compliance', value: 96 },
              { label: 'Weight Consistency', value: 98 },
              { label: 'On-Time Delivery', value: 94 }
            ].map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{metric.label}</span>
                  <span className="font-medium">{metric.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div 
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
