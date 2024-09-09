import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { borderBottom, fontFamily, fontWeight, maxWidth, width } from '@mui/system';

const ManageNews = () => {
    const [newsList, setNewsList] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        imageUrl: '',
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/news'); // Adjust endpoint as needed
            setNewsList(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
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
                await axios.put(`http://127.0.0.1:5000/news/${editId}`, formData);
                Swal.fire('Success', 'News updated successfully!', 'success');
            } else {
                await axios.post('http://127.0.0.1:5000/news', formData);
                Swal.fire('Success', 'News created successfully!', 'success');
            }
            fetchNews();
            setFormData({ title: '', content: '', imageUrl: '' });
            setEditId(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire('Error', 'There was an issue processing your request.', 'error');
        }
    };

    const handleEdit = (news) => {
        setFormData({
            title: news.title,
            content: news.content,
            imageUrl: news.imageUrl,
        });
        setEditId(news.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/news/${id}`);
            Swal.fire('Deleted', 'News deleted successfully!', 'success');
            fetchNews();
        } catch (error) {
            console.error('Error deleting news:', error);
            Swal.fire('Error', 'There was an issue deleting the news.', 'error');
        }
    };

    const containerStyle = {
        width:'100%',
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
        borderBottom:'1px solid blue',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        marginBottom: '10px',
        width: '100%',
        maxWidth:'900px'
    };

    const inputStyle = {
        padding: '5px',
        border: '1px solid blue',
        borderRadius: '4px',
        fontSize: '1.2rem',
        transition: 'border-color 0.3s',
        fontFamily: "serif",
        fontWeight: 300,
        width:'100%',
        maxWidth:'1200px',
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
        width:'100%',
        maxWidth:'100px',
        '&:hover': {
            backgroundColor: 'green',
        },
    };

    const newsItemStyle = {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    };

    const newsContentStyle = {
        '& h2': {
            margin: '0 0 10px',
            color: '#333',
        },
        '& p': {
            color: '#555',
        },
        '& img': {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '4px',
            marginTop: '10px',
        },
    };

    const newsActionsStyle = {
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
            <h1 style={headerStyle}>Manage News</h1>
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
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Content"
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    {editId ? 'Update News' : 'Create News'}
                </button>
            </form>
            <div>
                {newsList.map(news => (
                    <div key={news.id} style={newsItemStyle}>
                        <div style={newsContentStyle}>
                            <h2>{news.title}</h2>
                            <p>{news.content}</p>
                            {news.imageUrl && <img src={news.imageUrl} alt={news.title} />}
                        </div>
                        <div style={newsActionsStyle}>
                            <button onClick={() => handleEdit(news)} style={buttonStyle}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(news.id)} style={deleteButtonStyle}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageNews;