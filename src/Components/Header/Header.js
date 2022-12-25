import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faClose } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [toggle, setToggle] = useState(0);
  return (
    <nav>
      <div className="control-icon">
        <FontAwesomeIcon onClick={()=>setToggle(!toggle)} icon={toggle? faClose: faBars} />
      </div>
      <ul className={toggle? "display-visible": "display-none"}>
        <li>
          <NavLink to="/home" className="text-decoration-none text-black text-white">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/reviews" className="text-decoration-none text-black text-white">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="text-decoration-none text-black text-white ">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="text-decoration-none text-black text-white">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-decoration-none text-black text-white">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
