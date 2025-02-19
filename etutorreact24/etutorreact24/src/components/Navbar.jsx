import React from 'react';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';

import logo from "../assets/logo.png";
import "./Navbar.css"
function Navbar() {

  

  return (
    <nav>
    <div className='nav-logo'>     <img src={logo}   />    </div>
    <div className='nav-links'>
  <ul>

    <li><a href="/">Home</a></li>
    <li><a href="/contact">contactus</a></li>
    <li><a href="/login">Login</a></li>
    <li><a href="/about">About us</a></li>

  </ul>
    
        
      </div>
    

   
   </nav>
  );
}

export default Navbar;
