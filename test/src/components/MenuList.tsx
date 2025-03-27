import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMenus } from '../api';
import { Menu } from '../types';

const MenuList: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const data = await getMenus();
        setMenus(data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      } 
    };
    fetchMenus();
  }, []);


  return (
    <div>
      <h2>Menus</h2>
      <ul className="list-group">
        {menus.map((menu) => (
          <li key={menu._id} >
            <Link to={`/menu/${menu._id}`}>
              <h3>{menu.name}</h3>
            </Link>
            <p>{menu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;