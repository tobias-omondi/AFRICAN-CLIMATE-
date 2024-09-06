import React, { useState, useEffect } from 'react';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ fullName: '', email: '', message: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch users from the API when the component mounts
    fetch('http://127.0.0.1:5000/user/') // Correct URL
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleAddUser = () => {
    if (!newUser.fullName || !newUser.email || !newUser.message) {
      setError('All fields are required.');
      return;
    }

    fetch('http://127.0.0.1:5000/user/', { // Correct URL
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
    fetch(`http://127.0.0.1:5000/user/${userId}`, { // Correct URL
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
    <div style={styles.container}>
      <h1 style={styles.title}>Manage Users</h1>

      <div style={styles.formContainer}>
        <h2 style={styles.subtitle}>Add New User</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="Full Name"
            value={newUser.fullName}
            onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            style={styles.input}
          />
        </div>
        <textarea
          placeholder="Message"
          value={newUser.message}
          onChange={(e) => setNewUser({ ...newUser, message: e.target.value })}
          style={styles.textarea}
        />
        <button onClick={handleAddUser} style={styles.button}>Add User</button>
      </div>

      <div style={styles.listContainer}>
        <h2 style={styles.subtitle}>User List</h2>
        <ul style={styles.userList}>
          {users.map(user => (
            <li key={user.id} style={styles.userListItem}>
              <span>{user.fullName} - {user.email} - {user.message}</span>
              <button 
                onClick={() => handleDeleteUser(user.id)} 
                style={styles.deleteButton}
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

// Styles for the component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '30px',
  },
  formContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#555',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  inputRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 15px', // Smaller button
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  listContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  userList: {
    listStyleType: 'none',
    padding: '0',
  },
  userListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '1.1rem',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '5px 10px',
  },
};

export default ManageUser;
