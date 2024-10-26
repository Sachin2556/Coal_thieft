import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Truck, MapPin, AlertTriangle, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: BarChart3, label: 'Dashboard' },
    { path: '/tracking', icon: Truck, label: 'Live Tracking' },
    { path: '/analytics', icon: TrendingUp, label: 'Analytics' },
    { path: '/alerts', icon: AlertTriangle, label: 'Alerts' }
  ];

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6" />
            <span className="font-bold text-xl">CoalGuard</span>
          </Link>
          
          <div className="flex space-x-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
                  ${isActive(path) 
                    ? 'bg-indigo-700 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-500'
                  }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
