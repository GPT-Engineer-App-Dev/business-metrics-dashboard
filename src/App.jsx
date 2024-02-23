import React from "react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

function App() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-8">Business Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sales Card */}
        <div className="card bg-primary text-primary-content">
          <div className="card-body items-center text-center">
            <FaShoppingCart className="text-5xl" />
            <p className="text-2xl">Sales</p>
            <p className="text-5xl">1,234</p>
          </div>
        </div>
        {/* Revenue Card */}
        <div className="card bg-secondary text-secondary-content">
          <div className="card-body items-center text-center">
            <FaDollarSign className="text-5xl" />
            <p className="text-2xl">Revenue</p>
            <p className="text-5xl">$89,400</p>
          </div>
        </div>
        {/* Customers Card */}
        <div className="card bg-accent text-accent-content">
          <div className="card-body items-center text-center">
            <FaUsers className="text-5xl" />
            <p className="text-2xl">Customers</p>
            <p className="text-5xl">5,600</p>
          </div>
        </div>
        {/* Growth Card */}
        <div className="card bg-info text-info-content">
          <div className="card-body items-center text-center">
            <FaChartLine className="text-5xl" />
            <p className="text-2xl">Growth</p>
            <p className="text-5xl">+7.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
