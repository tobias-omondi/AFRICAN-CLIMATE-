// src/admin/components/AdminDashboard.js
import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar'; 
import TopBar from './TopBar';
import { Routes, Route } from 'react-router-dom';
import ManageUser from '../Pages/ManageUser';
import ManageNews from '../Pages/ManageNews';
import ManageMultimedia from '../Pages/ManageMultimedia';
import ManageDocs from '../Pages/ManageDocs';
import ManagePanelDiscussion from '../Pages/ManagePanelDiscusion';
import ManagePodcast from '../Pages/ManagePodcast';
import ManageAdmin from '../Pages/ManageAdimin';
import ManageInterview from '../Pages/ManageInterview';

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
          <Route path="/manage-admins" element={<ManageAdmin/>} />
            <Route path="/manage-users" element={<ManageUser/>} />
            <Route path = "/news" element = {<ManageNews/>} />
            <Route path = "/multimedia" element = {<ManageMultimedia/>} />
            <Route path = "/documentary" element = {<ManageDocs/>} />
            <Route path = "/panel-discussion" element = {<ManagePanelDiscussion/>} />
            <Route path = "/podcast" element = {<ManagePodcast/>} />
            <Route path = "/interviews" element = {<ManageInterview/>} />
            {/* Add other routes as needed */}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
