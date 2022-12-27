import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import "./404.css";
const PageNotFound = () => {
  return (
    <div className="cat-icon-container">
      <div className="">
        <h2>Page Not found !</h2>
      </div>
      <FontAwesomeIcon icon={faCat} className="cat-icon"></FontAwesomeIcon>
    </div>
  );
};

export default PageNotFound;
