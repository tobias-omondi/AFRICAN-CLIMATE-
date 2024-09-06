import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import './ManageDocs.css'; // Import the CSS file for styling

const ManageDocs = () => {
    const [docsList, setDocsList] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        fileUrl: '',
        contentType: 'PDF', // Default content type
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchDocs();
    }, []);

    const fetchDocs = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/documentation'); // Adjust endpoint as needed
            setDocsList(response.data);
        } catch (error) {
            console.error('Error fetching documentation:', error);
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

    return (
        <div className="container">
            <h1>Manage Documentation</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    required
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="text"
                    name="fileUrl"
                    value={formData.fileUrl}
                    onChange={handleInputChange}
                    placeholder="File URL"
                    required
                />
                <select
                    name="contentType"
                    value={formData.contentType}
                    onChange={handleInputChange}
                >
                    <option value="PDF">PDF</option>
                    <option value="DOC">DOC</option>
                    <option value="DOCX">DOCX</option>
                </select>
                <button type="submit">{editId ? 'Update Documentation' : 'Create Documentation'}</button>
            </form>
            <div className="docsList">
                {docsList.map(doc => (
                    <div key={doc.id} className="docItem">
                        <h2>{doc.title}</h2>
                        <p>{doc.description}</p>
                        <a href={doc.file_url} target="_blank" rel="noopener noreferrer">
                            {doc.content_type}
                        </a>
                        <div className="docActions">
                            <button onClick={() => handleEdit(doc)}>Edit</button>
                            <button onClick={() => handleDelete(doc.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageDocs;
