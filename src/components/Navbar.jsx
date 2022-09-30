import React from "react";

const NavItem = (props) => {
  return (
    <>
      <a className="nav-link" href={props.link}>
        {props.menu}
      </a>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <NavItem link="#" menu="about" />
        <NavItem link="#" menu="admission" />
      </div>
      <div className="center-nav">
        <div className="logo-container-u">
          <span className="logoTextP1">F</span>
          <span className="logoTextP2">C</span>
          <span className="logoTextP3">iT</span>
        </div>
        <div className="logo-container-b">
          <span className="logoTextP1">F</span>
          <span className="logoTextP2">C</span>
          <span className="logoTextP3">iT</span>
        </div>
      </div>
      <div className="right-nav">
        <NavItem link="#" menu="update" />
        <NavItem link="#" menu="utilities" />
      </div>
    </div>
  );
};

export default Navbar;
