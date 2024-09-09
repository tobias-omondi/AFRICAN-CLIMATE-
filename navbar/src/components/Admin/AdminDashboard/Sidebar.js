// src/admin/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { AdminPanelSettings, Person, Newspaper, PhotoLibrary, Description, Movie, Headset, Mic, Settings } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div style={{
      width: '250px',
      backgroundColor: '#c8d6db',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
    }}>
      <List sx={{ flex: 1 }}>
        <ListItem 
          button 
          component={Link} 
          to="/admin/manage-admins" 
          sx={{ 
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><AdminPanelSettings /></ListItemIcon>
          <ListItemText primary="Manage Admins" sx={{ color: 'black' }} />
        </ListItem>
        <Divider sx={{ my: 2 }} />
        <ListItem 
          button 
          component={Link} 
          to="/admin/manage-users" 
          sx={{ 
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="Manage Users" sx={{ color: 'black' }} />
        </ListItem>
        <Divider sx={{ my: 2 }} />
        <ListItem 
          button 
          component={Link} 
          to="/admin/news" 
          sx={{ 
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><Newspaper /></ListItemIcon>
          <ListItemText primary="News" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/admin/multimedia" 
          sx={{ 
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><PhotoLibrary /></ListItemIcon>
          <ListItemText primary="Multimedia" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/admin/documentary" 
          sx={{ 
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><Description /></ListItemIcon>
          <ListItemText primary="Documentary" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/admin/panel-discussion" 
          sx={{ 
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><Movie /></ListItemIcon>
          <ListItemText primary="Panel Discussions" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/admin/podcast" 
          sx={{ 
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><Headset /></ListItemIcon>
          <ListItemText primary="Podcasts" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/admin/interviews" 
          sx={{ 
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><Mic /></ListItemIcon>
          <ListItemText primary="Interviews" sx={{ color: 'black' }} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/admin/settings" 
          sx={{ 
            mt: '0.5rem', // Reduced margin top
            '&:hover': { 
              backgroundColor: '#083e58', 
              '& .MuiListItemText-primary': {
                color: '#fff',
              },
              '& .MuiListItemIcon-root': {
                color: '#1e90ff', // Blue color on hover
              }
            } 
          }}>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" sx={{ color: 'black' }} />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
