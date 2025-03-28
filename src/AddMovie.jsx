import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const navigate = useNavigate();

 

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/'); 
  };

  return (
    <div>
        <h1>Add Movie</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="director">Director:</label>
            <input type="text" id="director" name="director" required />
            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre" required />
            <label htmlFor="releaseYear">Release Year:</label>
            <input type="number" id="releaseYear" name="releaseYear" required />
            <label htmlFor="synopsis">Synopsis:</label>
            <textarea id="synopsis" name="synopsis" required />
            <label htmlFor="posterUrl">Poster URL:</label>
            <input type="url" id="posterUrl" name="posterUrl" required />
            <button type="submit">Add Movie</button>
            <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </form>
    </div>
  );
};

export default AddMovie;