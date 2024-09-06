import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManagePodcast = () => {
    const [podcasts, setPodcasts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        audioUrl: '',
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchPodcasts();
    }, []);

    const fetchPodcasts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/podcast');
            setPodcasts(response.data);
        } catch (error) {
            console.error('Error fetching podcasts:', error);
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
                await axios.put(`http://127.0.0.1:5000/podcast/${editId}`, formData);
                Swal.fire('Success', 'Podcast updated successfully!', 'success');
            } else {
                await axios.post('http://127.0.0.1:5000/podcast', formData);
                Swal.fire('Success', 'Podcast created successfully!', 'success');
            }
            fetchPodcasts();
            setFormData({ title: '', description: '', audioUrl: '' });
            setEditId(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire('Error', 'There was an issue processing your request.', 'error');
        }
    };

    const handleEdit = (podcast) => {
        setFormData({
            title: podcast.title,
            description: podcast.description,
            audioUrl: podcast.audio_url,
        });
        setEditId(podcast.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/podcast/${id}`);
            Swal.fire('Deleted', 'Podcast deleted successfully!', 'success');
            fetchPodcasts();
        } catch (error) {
            console.error('Error deleting podcast:', error);
            Swal.fire('Error', 'There was an issue deleting the podcast.', 'error');
        }
    };

    return (
        <div>
            <h1>Manage Podcasts</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    required
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    required
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    name="audioUrl"
                    value={formData.audioUrl}
                    onChange={handleInputChange}
                    placeholder="Audio URL"
                    required
                    style={{ marginRight: '10px' }}
                />
                <button type="submit">{editId ? 'Update Podcast' : 'Create Podcast'}</button>
            </form>
            <ul>
                {podcasts.map(podcast => (
                    <li key={podcast.id}>
                        <h2>{podcast.title}</h2>
                        <p>{podcast.description}</p>
                        {podcast.audio_url && <audio controls src={podcast.audio_url} />}
                        <button onClick={() => handleEdit(podcast)}>Edit</button>
                        <button onClick={() => handleDelete(podcast.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManagePodcast;
