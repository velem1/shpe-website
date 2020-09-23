import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About SHPE</Link>
        </li>
        <li>
          <Link to='/team'>Meet the Team</Link>
        </li>
        <li>
          <Link to='/alumni'>Alumni</Link>
        </li>
        <li>
          <Link to='/pastevents'>Past Events</Link>
        </li>
        <li>
          <Link to='/joinus'>Join Us</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "SHPE SUNY New Paltz",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
