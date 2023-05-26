import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>TechyStar.</h1>
      <main>
        <HashLink to={"/#home"}>HOME</HashLink>
        <Link to={"/contact"}>CONTACT</Link>
        <HashLink to={"/#brands"}>BRANDS</HashLink>
        <HashLink to={"/#about"}>ABOUT</HashLink>
        <Link to={"/services"}>SERVICES</Link>
      </main>
    </nav>
  );
};

export default Header;
