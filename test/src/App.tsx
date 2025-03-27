import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuList from './components/MenuList';
import MenuItemList from './components/MenuItemList';
import CreateMenu from './components/CreateMenu';
import CreateMenuItem from './components/CreateMenuItem';

const App: React.FC = () => {
  return (
    <Router>
      <div >
        <nav >
          <Link  to="/">Menu Manager</Link>
          <div className="navbar-nav">
            <Link  to="/">Menus</Link>
            <Link to="/create-menu">Create Menu</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="/create-menu" element={<CreateMenu />} />
          <Route path="/menu/:menuId" element={<MenuItemList />} />
          <Route path="/menu/:menuId/create-item" element={<CreateMenuItem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;