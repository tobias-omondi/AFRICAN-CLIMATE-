import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageAdmin = () => {
    const [admins, setAdmins] = useState([]);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/admin');
            setAdmins(response.data);
        } catch (error) {
            console.error('Error fetching admins:', error);
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
                await axios.put(`http://127.0.0.1:5000/admin/${editId}`, formData);
                Swal.fire('Success', 'Admin updated successfully!', 'success');
            } else {
                await axios.post('http://127.0.0.1:5000/admin', formData);
                Swal.fire('Success', 'Admin created successfully!', 'success');
            }
            fetchAdmins();
            setFormData({ username: '', email: '', password: '' });
            setEditId(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire('Error', 'There was an issue processing your request.', 'error');
        }
    };

    const handleEdit = (admin) => {
        setFormData({
            username: admin.username,
            email: admin.email,
            password: '', // Do not populate password field
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

    return (
        <div>
            <h1>Manage Admins</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    required
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required={!editId} // Password is required only if creating a new admin
                    style={{ marginRight: '10px' }}
                />
                <button type="submit">{editId ? 'Update Admin' : 'Create Admin'}</button>
            </form>
            <ul>
                {admins.map(admin => (
                    <li key={admin.id}>
                        <h2>{admin.username}</h2>
                        <p>{admin.email}</p>
                        <button onClick={() => handleEdit(admin)}>Edit</button>
                        <button onClick={() => handleDelete(admin.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageAdmin;
