import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-100">
      <div className="flex space-x-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        
        {!isAuthenticated && (
          <>
            <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
            <Link to="/register" className="text-blue-600 hover:text-blue-800">Register</Link>
          </>
        )}

        {isAuthenticated && user && (
          <>
            {user.type === 'admin' && (
              <>
                <Link to="/admin/employees" className="text-blue-600 hover:text-blue-800">Employees</Link>
                <Link to="/admin/add-job" className="text-blue-600 hover:text-blue-800">Add Job</Link>
              </>
            )}

            {user.type === 'employee' && (
              <Link to="/employee/jobs" className="text-blue-600 hover:text-blue-800">Jobs</Link>
            )}

            <button 
              onClick={handleLogout} 
              className="text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;  