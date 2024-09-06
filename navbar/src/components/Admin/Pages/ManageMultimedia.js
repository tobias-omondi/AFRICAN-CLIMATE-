import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import './ManageMultimedia.css'; // Import the CSS file for styling

const ManageMultimedia = () => {
    const [multimediaList, setMultimediaList] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        fileUrl: '',
        contentType: 'image', // Default content type
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchMultimedia();
    }, []);

    const fetchMultimedia = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/multimedia'); // Adjust endpoint as needed
            setMultimediaList(response.data);
        } catch (error) {
            console.error('Error fetching multimedia:', error);
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
                await axios.put(`http://127.0.0.1:5000/multimedia/${editId}`, formData);
                Swal.fire('Success', 'Multimedia updated successfully!', 'success');
            } else {
                await axios.post('http://127.0.0.1:5000/multimedia', formData);
                Swal.fire('Success', 'Multimedia created successfully!', 'success');
            }
            fetchMultimedia();
            setFormData({ title: '', description: '', fileUrl: '', contentType: 'image' });
            setEditId(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire('Error', 'There was an issue processing your request.', 'error');
        }
    };

    const handleEdit = (multimedia) => {
        setFormData({
            title: multimedia.title,
            description: multimedia.description,
            fileUrl: multimedia.file_url, // Note the field name matches the API response
            contentType: multimedia.content_type, // Note the field name matches the API response
        });
        setEditId(multimedia.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/multimedia/${id}`);
            Swal.fire('Deleted', 'Multimedia deleted successfully!', 'success');
            fetchMultimedia();
        } catch (error) {
            console.error('Error deleting multimedia:', error);
            Swal.fire('Error', 'There was an issue deleting the multimedia.', 'error');
        }
    };

    return (
        <div className="container">
            <h1>Manage Multimedia</h1>
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
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                </select>
                <button type="submit">{editId ? 'Update Multimedia' : 'Create Multimedia'}</button>
            </form>
            <div className="multimediaList">
                {multimediaList.map(multimedia => (
                    <div key={multimedia.id} className="multimediaItem">
                        <div className="multimediaContent">
                            <h2>{multimedia.title}</h2>
                            <p>{multimedia.description}</p>
                            {multimedia.content_type === 'image' && <img src={multimedia.file_url} alt={multimedia.title} />}
                            {multimedia.content_type === 'video' && <video src={multimedia.file_url} controls />}
                            {multimedia.content_type === 'audio' && <audio src={multimedia.file_url} controls />}
                        </div>
                        <div className="multimediaActions">
                            <button onClick={() => handleEdit(multimedia)}>Edit</button>
                            <button onClick={() => handleDelete(multimedia.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageMultimedia;
