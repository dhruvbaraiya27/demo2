import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/admin/employees">Manage Employees</Link>
        <Link to="/admin/add-job">Add New Job</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;