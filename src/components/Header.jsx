import React from 'react'
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
   <nav>
    <h1>TechStar</h1>
    <main>
      <HashLink to={"/#home"}>Home</HashLink>
      <HashLink to={"/Mycontacts"}>contact</HashLink>
      <HashLink to={"/#about"}>About</HashLink>
      <HashLink to={"/#brands"}>Brand</HashLink>
      <Link to={"/Myservices"}>services</Link>
    
    </main>
   </nav>
  );
}

export default Header
