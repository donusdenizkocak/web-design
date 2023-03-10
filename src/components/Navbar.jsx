import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header className="header header-nawbar">
        <nav className="header-left" onClick={()=>navigate("/")} style={{cursor:"pointer"}}>
          <h1 >
            <span id="h1-span">Clarusway</span> Web Design
          </h1>
        </nav>
        <nav className="header-right">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/services">SERVİCES</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
