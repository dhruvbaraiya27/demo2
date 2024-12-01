import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Import Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/common/Navbar';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Admin Routes */}
        {isAuthenticated && user?.type === 'admin' && (
          <>
            <Route 
              path="/admin/employees" 
              element={
                <PrivateRoute allowedRoles={['admin']}>
                  {/* Add Employees Component */}
                  <div>Admin Employees Page</div>
                </PrivateRoute>
              } 
            />
            <Route 
              path="/admin/add-job" 
              element={
                <PrivateRoute allowedRoles={['admin']}>
                  {/* Add Job Form Component */}
                  <div>Add Job Page</div>
                </PrivateRoute>
              } 
            />
          </>
        )}

        {/* Employee Routes */}
        {isAuthenticated && user?.type === 'employee' && (
          <Route 
            path="/jobs" 
            element={
              <PrivateRoute allowedRoles={['employee']}>
                {/* Jobs List Component */}
                <div>Employee Jobs Page</div>
              </PrivateRoute>
            } 
          />
        )}

        {/* Default Routes */}
        <Route 
          path="/" 
          element={
            isAuthenticated ? (
              user.type === 'admin' ? (
                <Navigate to="/admin/employees" />
              ) : (
                <Navigate to="/jobs" />
              )
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        {/* 404 Route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;