import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  let activeStyle = {
    color: "#ffc800",
    fontWeight: "bold"
  };
  const [toggle, setToggle] = useState(0);
  return (
    <nav>
      <div className="control-icon">
        <FontAwesomeIcon
          onClick={() => setToggle(!toggle)}
          icon={toggle ? faClose : faBars}
        />
      </div>
      <ul className={toggle ? "display-visible" : "display-none"}>
        <li>
          <NavLink
            to="/home"
            className="text-decoration-none text-black text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            className="text-decoration-none text-black text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className="text-decoration-none text-black text-white "
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className="text-decoration-none text-black text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="text-decoration-none text-black text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
