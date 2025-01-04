import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo">
          <h1>Mahak Mehta</h1>
        </div>
        <div className={`nav-links ${isMenuOpen ? "open" : "hidden"}`}>
          <ul>
            <Link to={'/'}> <li> Home</li></Link>
            <Link to={'/about'}><li> About</li></Link>
            <Link to={'/projects'}><li> Projects</li></Link>
            <Link to={'/resume'}><li>Resume</li></Link>
            <Link to={'/skills'}><li>Skills</li></Link>
            <Link to={'/contact'}><li>Connect</li></Link>
            
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="fa-solid fa-xmark"></i> /* Cross Icon */
          ) : (
            <i className="fa-solid fa-bars"></i> /* Hamburger Icon */
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
