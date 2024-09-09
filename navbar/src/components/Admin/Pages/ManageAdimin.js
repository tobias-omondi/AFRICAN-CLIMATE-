import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Loader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <div style={{
            border: '4px solid rgba(0, 0, 0, 0.1)',
            borderLeftColor: '#4CAF50',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite'
        }}></div>
    </div>
);

const ManageAdmin = () => {
    const [admins, setAdmins] = useState([]);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://127.0.0.1:5000/auth/status');
            setAdmins(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching admins:', error);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                await axios.put(`http://127.0.0.1:5000/admin/change-password/${editId}`, { password: formData.password });
                Swal.fire('Success', 'Password updated successfully!', 'success');
            } else {
                await axios.post('http://127.0.0.1:5000/admin/create', formData);
                Swal.fire('Success', 'Admin created successfully!', 'success');
            }
            fetchAdmins();
            setFormData({ username: '', password: '' });
            setEditId(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire('Error', 'There was an issue processing your request.', 'error');
        }
    };

    const handleEdit = (admin) => {
        setFormData({
            username: admin.username,
            password: '',
        });
        setEditId(admin.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/admin/${id}`);
            Swal.fire('Deleted', 'Admin deleted successfully!', 'success');
            fetchAdmins();
        } catch (error) {
            console.error('Error deleting admin:', error);
            Swal.fire('Error', 'There was an issue deleting the admin.', 'error');
        }
    };

    // Inline styling for form, buttons, and list items
    const containerStyle = {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto'
    };

    const formStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
    };

    const inputStyle = {
        padding: '10px',
        flex: 1,
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    };

    const buttonHoverStyle = {
        backgroundColor: '#45a049'
    };

    const listItemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '10px',
        marginBottom: '10px'
    };

    const actionButtonStyle = (color) => ({
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        color: 'white',
        backgroundColor: color,
    });

    return (
        <div style={containerStyle}>
            <h1>Manage Admins</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required={!editId}
                    style={inputStyle}
                />
                <button
                    type="submit"
                    style={{ ...buttonStyle, ...(editId ? buttonHoverStyle : null) }}
                >
                    {editId ? 'Update Password' : 'Create Admin'}
                </button>
            </form>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {loading ? (
                    <Loader />
                ) : (
                    Array.isArray(admins) && admins.length > 0 ? (
                        admins.map((admin) => (
                            <li key={admin.id} style={listItemStyle}>
                                <h2>{admin.username}</h2>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button
                                        onClick={() => handleEdit(admin)}
                                        style={actionButtonStyle('#2196F3')}
                                    >
                                        Change Password
                                    </button>
                                    <button
                                        onClick={() => handleDelete(admin.id)}
                                        style={actionButtonStyle('#f44336')}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>No admins found.</p>
                    )
                )}
            </ul>
        </div>
    );
};

export default ManageAdmin;
