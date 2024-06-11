import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle';

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div>
        {location.pathname === '/bookshelf' && (
          <Link to="/">
            <button>Search Books</button>
          </Link>
        )}
        {location.pathname === '/' && (
          <Link to="/bookshelf">
            <button>My Bookshelf</button>
          </Link>
        )}
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default NavBar;