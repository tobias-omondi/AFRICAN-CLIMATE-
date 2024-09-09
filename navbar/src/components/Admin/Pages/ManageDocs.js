import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageDocs = () => {
    const [docsList, setDocsList] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        fileUrl: '',
        contentType: 'PDF', // Default to 'PDF'
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchDocs();
    }, []);

    const fetchDocs = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/documentation'); // Adjust the endpoint
            setDocsList(response.data);
        } catch (error) {
            console.error('Error fetching docs:', error);
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
                await axios.put(`http://127.0.0.1:5000/documentation/${editId}`, formData);
                Swal.fire('Success', 'Documentation updated successfully!', 'success');
            } else {
                await axios.post('http://127.0.0.1:5000/documentation', formData);
                Swal.fire('Success', 'Documentation created successfully!', 'success');
            }
            fetchDocs();
            setFormData({ title: '', description: '', fileUrl: '', contentType: 'PDF' });
            setEditId(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire('Error', 'There was an issue processing your request.', 'error');
        }
    };

    const handleEdit = (doc) => {
        setFormData({
            title: doc.title,
            description: doc.description,
            fileUrl: doc.file_url,
            contentType: doc.content_type,
        });
        setEditId(doc.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/documentation/${id}`);
            Swal.fire('Deleted', 'Documentation deleted successfully!', 'success');
            fetchDocs();
        } catch (error) {
            console.error('Error deleting documentation:', error);
            Swal.fire('Error', 'There was an issue deleting the documentation.', 'error');
        }
    };

    const containerStyle = {
        width: '100%',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px",
    };

    const headerStyle = {
        textAlign: 'center',
        color: '#333',
        marginBottom: '10px',
        fontFamily: 'serif',
        borderBottom: '1px solid blue',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '10px',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
    };

    const inputStyle = {
        padding: '10px',
        border: '1px solid blue',
        borderRadius: '4px',
        fontSize: '1.2rem',
        transition: 'border-color 0.3s',
        fontFamily: 'serif',
        fontWeight: 300,
        width: '100%',
    };

    const buttonStyle = {
        padding: '10px',
        backgroundColor: '#007bff',
        fontFamily: 'serif',
        fontWeight: 300,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    };

    const docItemStyle = {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    };

    const docActionsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
    };

    const deleteButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#dc3545',
        '&:hover': {
            backgroundColor: '#c82333',
        },
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Manage Documentation</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    required
                    style={inputStyle}
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="fileUrl"
                    value={formData.fileUrl}
                    onChange={handleInputChange}
                    placeholder="File URL"
                    required
                    style={inputStyle}
                />
                <select
                    name="contentType"
                    value={formData.contentType}
                    onChange={handleInputChange}
                    style={inputStyle}
                >
                    <option value="PDF">PDF</option>
                    <option value="DOC">DOC</option>
                    <option value="DOCX">DOCX</option>
                </select>
                <button type="submit" style={buttonStyle}>
                    {editId ? 'Update Documentation' : 'Create Documentation'}
                </button>
            </form>
            <div>
                {docsList.map(doc => (
                    <div key={doc.id} style={docItemStyle}>
                        <h2>{doc.title}</h2>
                        <p>{doc.description}</p>
                        <a href={doc.file_url} target="_blank" rel="noopener noreferrer">
                            {doc.content_type}
                        </a>
                        <div style={docActionsStyle}>
                            <button onClick={() => handleEdit(doc)} style={buttonStyle}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(doc.id)} style={deleteButtonStyle}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageDocs;
