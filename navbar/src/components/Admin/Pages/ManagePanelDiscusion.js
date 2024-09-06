import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import './ManagePanelDiscussion.css'; // Import the CSS file for styling

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
            const response = await axios.get('http://127.0.0.1:5000/paneldiscussion'); // Adjust endpoint as needed
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

    return (
        <div className="container">
            <h1>Manage Panel Discussions</h1>
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
                />
                <textarea
                    name="panelList"
                    value={formData.panelList}
                    onChange={handleInputChange}
                    placeholder="List of Panelists (comma-separated)"
                />
                <input
                    type="text"
                    name="videoFilePath"
                    value={formData.videoFilePath}
                    onChange={handleInputChange}
                    placeholder="Video File URL"
                />
                <button type="submit">{editId ? 'Update Discussion' : 'Create Discussion'}</button>
            </form>
            <div className="discussionsList">
                {discussionsList.map(discussion => (
                    <div key={discussion.id} className="discussionItem">
                        <h2>{discussion.title}</h2>
                        <p>{discussion.description}</p>
                        <p><strong>Panelists:</strong> {discussion.panel_list}</p>
                        {discussion.video_file_path && (
                            <video controls src={discussion.video_file_path} />
                        )}
                        <div className="discussionActions">
                            <button onClick={() => handleEdit(discussion)}>Edit</button>
                            <button onClick={() => handleDelete(discussion.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagePanelDiscussion;
