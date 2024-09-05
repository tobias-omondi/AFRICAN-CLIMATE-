// src/admin/components/AdminDashboard.js
import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar'; 
import TopBar from './TopBar';
import { Routes, Route } from 'react-router-dom';
import ManageUser from '../Pages/ManageUser';

const AdminDashboard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* TopBar at the top */}
      <TopBar />

      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Routes>
            <Route path="/manage-users" element={<ManageUser/>} />
            {/* Add other routes as needed */}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
