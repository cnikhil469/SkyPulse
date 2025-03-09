// import React from "react";
// import { useState } from "react";
import "../styles/header.scss";
import { Search } from "lucide-react";
const Header = () => {
  return (
    <div className="header-container">
      <h3>Welcome, Nikhil</h3>
      <div className="icon-container">
        <Search />
      </div>
    </div>
  );
};

export default Header;
