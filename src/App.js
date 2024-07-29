import React from 'react';
import AdminLayout from './layout/admin/AdminLayout';
import AuthLayout from './layout/auth/AuthLayout';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
  return (
    <div>
      {
        location.pathname.includes("/login") ? (
          <AuthLayout/>
        ) : (
        <AdminLayout/>
        )
      }
        
        
    </div>
  );
}

export default App;
