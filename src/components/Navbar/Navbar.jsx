import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css"; 

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Doctor", path: "/doctor" },
    { name: "Our Services", path: "/our-services" },
    { name: "About-Us", path: "/about-us" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white mb-2 fixed-top">
      <div className="container-xl d-flex justify-content-between align-items-center w-100">

        <div className="d-flex align-items-center ps-0">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </NavLink>
        </div>

        <div className="d-none d-lg-flex align-items-center gap-4 mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-decoration-none nav-link ${isActive ? "active-nav" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="login-signup-container pe-4">
          <NavLink to="/login" className="login-link">Login</NavLink>
          <span className="login-divider">/</span>
          <NavLink to="/login" className="signup-link">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
