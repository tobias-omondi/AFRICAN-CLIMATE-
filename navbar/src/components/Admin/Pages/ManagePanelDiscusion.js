import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManagePanelDiscussion = () => {
    const [discussionsList, setDiscussionsList] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        panelList: '',
        videoFilePath: '',
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchDiscussions();
    }, []);

    const fetchDiscussions = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/paneldiscussion');
            setDiscussionsList(response.data);
        } catch (error) {
            console.error('Error fetching panel discussions:', error);
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
                await axios.put(`http://127.0.0.1:5000/paneldiscussion/${editId}`, formData);
                Swal.fire('Success', 'Panel discussion updated successfully!', 'success');
            } else {
                await axios.post('http://127.0.0.1:5000/paneldiscussion', formData);
                Swal.fire('Success', 'Panel discussion created successfully!', 'success');
            }
            fetchDiscussions();
            setFormData({ title: '', description: '', panelList: '', videoFilePath: '' });
            setEditId(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire('Error', 'There was an issue processing your request.', 'error');
        }
    };

    const handleEdit = (discussion) => {
        setFormData({
            title: discussion.title,
            description: discussion.description,
            panelList: discussion.panel_list,
            videoFilePath: discussion.video_file_path,
        });
        setEditId(discussion.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/paneldiscussion/${id}`);
            Swal.fire('Deleted', 'Panel discussion deleted successfully!', 'success');
            fetchDiscussions();
        } catch (error) {
            console.error('Error deleting panel discussion:', error);
            Swal.fire('Error', 'There was an issue deleting the panel discussion.', 'error');
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

    const deleteButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#dc3545',
        '&:hover': {
            backgroundColor: '#c82333',
        },
    };

    const discussionItemStyle = {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    };

    const discussionActionsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Manage Panel Discussions</h1>
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
                <textarea
                    name="panelList"
                    value={formData.panelList}
                    onChange={handleInputChange}
                    placeholder="List of Panelists (comma-separated)"
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="videoFilePath"
                    value={formData.videoFilePath}
                    onChange={handleInputChange}
                    placeholder="Video File URL"
                    required
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    {editId ? 'Update Discussion' : 'Create Discussion'}
                </button>
            </form>
            <div>
                {discussionsList.map(discussion => (
                    <div key={discussion.id} style={discussionItemStyle}>
                        <h2>{discussion.title}</h2>
                        <p>{discussion.description}</p>
                        <p><strong>Panelists:</strong> {discussion.panel_list}</p>
                        {discussion.video_file_path && (
                            <video controls src={discussion.video_file_path} style={{ width: '100%', borderRadius: '4px' }} />
                        )}
                        <div style={discussionActionsStyle}>
                            <button onClick={() => handleEdit(discussion)} style={buttonStyle}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(discussion.id)} style={deleteButtonStyle}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagePanelDiscussion;
