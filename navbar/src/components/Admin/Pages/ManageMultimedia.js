import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageMultimedia = () => {
    const [multimediaList, setMultimediaList] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        fileUrl: '',
        contentType: 'image',
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
            fileUrl: multimedia.file_url,
            contentType: multimedia.content_type,
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

    const containerStyle = {
        width: '100%',
        margin: '0 auto',
        padding: '2px',
        backgroundColor: '#ff51',
        borderRadius: '8px',
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    };

    const headerStyle = {
        textAlign: 'center',
        color: '#999',
        marginBottom: '10px',
        fontFamily: "serif",
        borderBottom: '1px solid blue',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        marginBottom: '10px',
        width: '100%',
        maxWidth: '900px',
    };

    const inputStyle = {
        padding: '5px',
        border: '1px solid blue',
        borderRadius: '4px',
        fontSize: '1.2rem',
        transition: 'border-color 0.3s',
        fontFamily: "serif",
        fontWeight: 300,
        width: '100%',
        maxWidth: '1200px',
    };

    const buttonStyle = {
        padding: '5px',
        backgroundColor: '#007bff',
        fontFamily: "serif",
        fontWeight: 300,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        width: '100%',
        maxWidth: '100px',
        '&:hover': {
            backgroundColor: 'green',
        },
    };

    const multimediaItemStyle = {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    };

    const multimediaContentStyle = {
        '& h2': {
            margin: '0 0 10px',
            color: '#333',
        },
        '& p': {
            color: '#555',
        },
        '& img, video, audio': {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '4px',
            marginTop: '10px',
        },
    };

    const multimediaActionsStyle = {
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
            <h1 style={headerStyle}>Manage Multimedia</h1>
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
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                </select>
                <button type="submit" style={buttonStyle}>
                    {editId ? 'Update Multimedia' : 'Create Multimedia'}
                </button>
            </form>
            <div>
                {multimediaList.map(multimedia => (
                    <div key={multimedia.id} style={multimediaItemStyle}>
                        <div style={multimediaContentStyle}>
                            <h2>{multimedia.title}</h2>
                            <p>{multimedia.description}</p>
                            {multimedia.content_type === 'image' && <img src={multimedia.file_url} alt={multimedia.title} />}
                            {multimedia.content_type === 'video' && <video src={multimedia.file_url} controls />}
                            {multimedia.content_type === 'audio' && <audio src={multimedia.file_url} controls />}
                        </div>
                        <div style={multimediaActionsStyle}>
                            <button onClick={() => handleEdit(multimedia)} style={buttonStyle}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(multimedia.id)} style={deleteButtonStyle}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageMultimedia;
