// src/admin/pages/ManageUser.js
import React, { useState, useEffect } from 'react';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ fullName: '', email: '', message: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch users from the API when the component mounts
    fetch('http://127.0.0.1:5000/users') // Correct URL
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleAddUser = () => {
    if (!newUser.fullName || !newUser.email || !newUser.message) {
      setError('All fields are required.');
      return;
    }

    fetch('http://127.0.0.1:5000/users', { // Correct URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        setUsers([...users, data]);
        setNewUser({ fullName: '', email: '', message: '' });
        setError('');
      })
      .catch(error => {
        console.error('Error adding user:', error);
        setError('Error adding user. Please try again.');
      });
  };

  const handleDeleteUser = (userId) => {
    fetch(`http://127.0.0.1:5000/users/${userId}`, { // Correct URL
      method: 'DELETE',
    })
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        setError('Error deleting user. Please try again.');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manage Users</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>Add New User</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          value={newUser.fullName}
          onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <textarea
          placeholder="Message"
          value={newUser.message}
          onChange={(e) => setNewUser({ ...newUser, message: e.target.value })}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <button onClick={handleAddUser} style={{ marginTop: '10px' }}>Add User</button>
      </div>

      <div>
        <h2>User List</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {users.map(user => (
            <li key={user.id} style={{ marginBottom: '10px' }}>
              {user.fullName} - {user.email} - {user.message}
              <button 
                onClick={() => handleDeleteUser(user.id)} 
                style={{ marginLeft: '10px', color: 'red' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageUser;
