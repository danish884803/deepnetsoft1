import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMenuItems } from '../api';
import { MenuItem } from '../types';

const MenuItemList: React.FC = () => {
  const { menuId } = useParams<{ menuId: string }>();
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (menuId) {
          const data = await getMenuItems(menuId);
          setItems(data);
        }
      } catch (err) {
        console.error('Error fetching menu items:', err);
      } 
    };
    fetchItems();
  }, [menuId]);


  return (
    <div>
      <h2>Menu Items</h2>
      <Link to={`/menu/${menuId}/create-item`} >
        Add New Item
      </Link>
      {items.length === 0 ? (
        <div >No items found for this menu</div>
      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li key={item._id} >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price?.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItemList;