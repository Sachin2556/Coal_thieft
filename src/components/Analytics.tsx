import React from 'react';
import { BarChart, LineChart, PieChart, TrendingUp } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    {
      title: 'Weight Variance Analysis',
      description: 'Average deviation from expected load weight',
      value: '0.3%',
      trend: 'down',
      change: '-0.1%'
    },
    {
      title: 'Route Efficiency',
      description: 'Optimal route adherence rate',
      value: '94%',
      trend: 'up',
      change: '+2.5%'
    },
    {
      title: 'Alert Resolution Time',
      description: 'Average time to resolve alerts',
      value: '12m',
      trend: 'down',
      change: '-3m'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">{metric.title}</h3>
              <TrendingUp className={`h-5 w-5 ${
                metric.trend === 'up' ? 'text-green-500 rotate-0' : 'text-red-500 rotate-180'
              }`} />
            </div>
            <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">{metric.value}</span>
              <span className={`text-sm ${
                metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">Weight Distribution</h3>
            <BarChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
            <span className="text-gray-500">Weight distribution chart will be rendered here</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">Alert Frequency</h3>
            <LineChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
            <span className="text-gray-500">Alert frequency chart will be rendered here</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">Route Analysis</h3>
            <LineChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
            <span className="text-gray-500">Route analysis chart will be rendered here</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">Alert Distribution</h3>
            <PieChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
            <span className="text-gray-500">Alert distribution chart will be rendered here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
