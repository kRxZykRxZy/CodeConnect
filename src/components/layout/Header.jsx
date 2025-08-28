import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../common/Button';

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="header">
      <div className="logo">CodeConnect</div>
      <nav>
        {currentUser ? (
          <Button onClick={handleLogout}>Log Out</Button>
        ) : (
          <>
            <Button onClick={() => navigate('/login')}>Login</Button>
            <Button onClick={() => navigate('/signup')}>Sign Up</Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
