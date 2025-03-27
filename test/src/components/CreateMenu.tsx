import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMenu } from '../api';

const CreateMenu: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMenu({ name, description });
      navigate('/');
    } catch (error) {
      console.error('Error creating menu:', error);
    }
  };

  return (
    <div>
      <h2>Create New Menu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div >
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">
          Create Menu
        </button>
      </form>
    </div>
  );
};

export default CreateMenu;