import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>TechyStar.</h1>
      <main>
        <HashLink to={"/Techy-Star/#home"}>HOME</HashLink>
        <Link to={"/Techy-Star/contact"}>CONTACT</Link>
        <HashLink to={"/Techy-Star/#brands"}>BRANDS</HashLink>
        <HashLink to={"/Techy-Star/#about"}>ABOUT</HashLink>
        <Link to={"/Techy-Star/services"}>SERVICES</Link>
      </main>
    </nav>
  );
};

export default Header;
