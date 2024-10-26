import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AlertTriangle, TrendingUp, Truck, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import LiveTracking from './components/LiveTracking';
import Analytics from './components/Analytics';
import Alerts from './components/Alerts';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tracking" element={<LiveTracking />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
