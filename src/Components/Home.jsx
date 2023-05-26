import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ category, id, onFormSubmit }) => {
const [selectedCategory, setSelectedCategory] = useState(category || 'people');
const [selectedId, setSelectedId] = useState(id || '');
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(selectedCategory, selectedId);
    navigate(`/${selectedCategory}/${selectedId}`);
};

return (
    <form
    onSubmit={handleSubmit}
    style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '700px'
    }}
    >
    Search For:{' '}
    <select
        style={{
        width: '200px',
        height: '50px',
        backgroundColor: '#efefef',
        border: 'none',
        borderRadius: '10px',
        color: 'black',
        margin: '10px',
        padding: '10px'
        }}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
    >
        <option value="people">People</option>
        <option value="planets">Planets</option>
    </select>
    ID:{' '}
    <input
        style={{
        width: '50px',
        height: '32px',
        backgroundColor: '#efefef',
        border: 'none',
        borderRadius: '10px',
        color: 'black',
        margin: '10px',
        padding: '10px'
        }}
        type="text"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
    />
    <button
        style={{
        fontSize: 'large',
        backgroundColor: 'blue',
        color: 'white',
        width: '100px',
        height: '50px',
        margin: '10px',
        border: 'none',
        borderRadius: '10px'
        }}
        type="submit"
    >
        Search
    </button>
    </form>
);
};

export default Home;
