import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeDashboard = () => {
  return (
    <div className="employee-dashboard">
      <h1>Employee Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/jobs">View Available Jobs</Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;