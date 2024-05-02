import React from "react";
import { FaReact, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="home-button">
        <FaHome size={20} />
      </Link>
      <div>
        <FaReact size={30} className="header-icon" />
        <span className="header-title">
          React from Zero to Hero by Hicham Maaqoul
        </span>
      </div>
    </header>
  );
};

export default Header;
