import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { BrowserRouter as Router, Link, useNavigate, NavLink } from "react-router-dom"
import logo from "../.././asset/Logo Motor.png"
import Rute from "./Rute";

const Navbar = () => {

const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
  return (
      <nav className="navbar">
        <Link to ="/"><img src={logo} alt="Logo Motor" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu  "}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick ={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links" onClick ={closeMobileMenu}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/produk"className="nav-links" onClick ={closeMobileMenu}>
              Produk
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/accessories" className="nav-links" onClick ={closeMobileMenu}>
              Accessories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact"className="nav-links" onClick ={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
