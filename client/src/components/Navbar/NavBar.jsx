import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">DysNova.</Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">Free Testing</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        {!isAuthenticated ? (
          <Link to="/login" className="login">Login</Link>
        ) : (
          <button className="logout" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
=======
<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      DysNova.
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      
      <li>
      <Link to='/games' >
      Free Testing
        </Link>
        
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
    
    </ul>
  </div>
  <div className="navbar-right">
    <a href="/login" className="login">
     Login
    </a>
    <a href=""></a>
   
  
  </div>
</nav>
);
>>>>>>> 49b9f811736cc77d8c06e4eb63c08b5d6eded76f
};

export default Navbar;
