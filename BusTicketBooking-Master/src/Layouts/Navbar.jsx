import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-danger navbar-dark">
      <motion.div className="view overlay" whileHover={{scale:1.2}}>
        <img
          src={require(`../Assets/Images/Tours & Travels-logos_white.png`)}
          border="0"
          width={75}
          className="img-fluid"
          alt="animated-bus-image-0007"
          />
        </motion.div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center align-item-center" id="collapsibleNavbar">
          <ul className="navbar-nav ">
            <li className="nav-item mx-lg-4 p-lg-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-lg-4 p-lg-2">
              <Link className="nav-link" to="searchbus">
                Search Bus
              </Link>
            </li>
            <li className="nav-item mx-lg-4 p-lg-2">
              <Link className="nav-link" to="recentbooking">
                Recent Booking
              </Link>
            </li>
            
            <li className="nav-item mx-lg-4 p-lg-2">
              <Link className="nav-link" to="contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mx-lg-4 p-lg-2">
              <Link className="nav-link" to="about">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-lg-4 p-lg-2 dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Login
              </a>
              <div className="dropdown-menu bg-danger">
                <Link className="dropdown-item" to="login">
                  Customer Login
                </Link>
                <Link className="dropdown-item" to="travelslogin">
                  Travels Login
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
