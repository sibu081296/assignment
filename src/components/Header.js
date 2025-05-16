import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../auth';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header>
      <div>
      <Link to="/">Home </Link>
      <Link to="/products">Products</Link>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;