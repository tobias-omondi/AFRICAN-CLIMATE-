import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageInterview = () => {
    const [interviewsList, setInterviewsList] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchInterviews();
    }, []);

    const fetchInterviews = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/interview');
            setInterviewsList(response.data);
        } catch (error) {
            console.error('Error fetching interviews:', error);
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
                await axios.put(`http://127.0.0.1:5000/interview/${editId}`, formData);
                Swal.fire('Success', 'Interview updated successfully!', 'success');
            } else {
                await axios.post('http://127.0.0.1:5000/interview', formData);
                Swal.fire('Success', 'Interview created successfully!', 'success');
            }
            fetchInterviews();
            setFormData({ title: '', description: '', imageUrl: '' });
            setEditId(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire('Error', 'There was an issue processing your request.', 'error');
        }
    };

    const handleEdit = (interview) => {
        setFormData({
            title: interview.title,
            description: interview.description,
            imageUrl: interview.image_url,
        });
        setEditId(interview.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/interview/${id}`);
            Swal.fire('Deleted', 'Interview deleted successfully!', 'success');
            fetchInterviews();
        } catch (error) {
            console.error('Error deleting interview:', error);
            Swal.fire('Error', 'There was an issue deleting the interview.', 'error');
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

    const interviewItemStyle = {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    };

    const interviewActionsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Manage Interviews</h1>
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
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                    required
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    {editId ? 'Update Interview' : 'Create Interview'}
                </button>
            </form>
            <div>
                {interviewsList.map(interview => (
                    <div key={interview.id} style={interviewItemStyle}>
                        <h2>{interview.title}</h2>
                        <p>{interview.description}</p>
                        {interview.image_url && (
                            <img src={interview.image_url} alt={interview.title} style={{ width: '100%', borderRadius: '4px' }} />
                        )}
                        <div style={interviewActionsStyle}>
                            <button onClick={() => handleEdit(interview)} style={buttonStyle}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(interview.id)} style={deleteButtonStyle}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageInterview;
