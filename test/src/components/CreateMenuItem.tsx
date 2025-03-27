import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createMenuItem } from '../api';

const CreateMenuItem: React.FC = () => {
  const { menuId } = useParams<{ menuId: string }>();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!menuId) return;
    
    try {
      await createMenuItem(menuId, {
        name,
        description,
        price: parseFloat(price),
      });
      navigate(`/menu/${menuId}`);
    } catch (error) {
      console.error('Error creating menu item:', error);
    }
  };

  return (
    <div>
      <h2>Create New Menu Item</h2>
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
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            min="0"
            required
          />
        </div>
        <button type="submit" >
          Create Item
        </button>
      </form>
    </div>
  );
};

export default CreateMenuItem;