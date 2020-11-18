import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar{" "}
        <span class="badge badge-pill badge-secondary">{totalCounters}</span>
      </span>
    </nav>
  );
};

export default NavBar;
