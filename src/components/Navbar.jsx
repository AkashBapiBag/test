// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/Navbar.css';

// export default function Navbar() {
//     return (
//         <nav className="navbar">
//             <div className="logo-container">
//                 <Link to="/" exact className="logo">
//                     Subhajit Naskar
//                 </Link>
//             </div>
//             <ul className="navbar-list">
//                 <li className="navbar-item">
//                     <Link to="/" exact className="navbar-link">
//                         Home
//                     </Link>
//                 </li>
//                 <li className="navbar-item">
//                     <Link to="/about" className="navbar-link">
//                         About
//                     </Link>
//                 </li>
//                 <li className="navbar-item">
//                     <Link to="/skills" className="navbar-link">
//                         Skills
//                     </Link>
//                 </li>
//                 <li className="navbar-item">
//                     <Link to="/projects" className="navbar-link">
//                         Projects
//                     </Link>
//                 </li>
//                 <li className="navbar-item">
//                     <Link to="/education" className="navbar-link">
//                         Education
//                     </Link>
//                 </li>
//                 <li className="navbar-item">
//                     <Link to="/contact" className="navbar-link">
//                         Contact
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

import React, { useState } from "react";
import "../css/Navbar.css";

// export default function Navbar({ setPage }) {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="logo-container">
//                 <button onClick={() => setPage('Home')} className="logo">
//                     Subhajit Naskar
//                 </button>
//             </div>
//             <div className={`menu-toggle ${menuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
//                 <div className="hamburger"></div>
//             </div>
//             <ul className={`navbar-list ${menuOpen ? 'is-active' : ''}`}>
//                 <li className="navbar-item">
//                     <button onClick={() => setPage('Home')} className="navbar-link">
//                         Home
//                     </button>
//                 </li>
//                 <li className="navbar-item">
//                     <button onClick={() => setPage('About')} className="navbar-link">
//                         About
//                     </button>
//                 </li>
//                 <li className="navbar-item">
//                     <button onClick={() => setPage('Skills')} className="navbar-link">
//                         Skills
//                     </button>
//                 </li>
//                 <li className="navbar-item">
//                     <button onClick={() => setPage('Projects')} className="navbar-link">
//                         Projects
//                     </button>
//                 </li>
//                 <li className="navbar-item">
//                     <button onClick={() => setPage('Education')} className="navbar-link">
//                         Education
//                     </button>
//                 </li>
//                 <li className="navbar-item">
//                     <button onClick={() => setPage('Contact')} className="navbar-link">
//                         Contact
//                     </button>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

const Navbar = () => {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    };
  
    return (
      <nav className="navbar fixed-top">
        <div className="navbar-left">
          <span className="navbar-name">Your Name</span>
        </div>
        <div className="navbar-right">
          <button onClick={() => scrollToSection('home')} className="navbar-button">Home</button>
          <button onClick={() => scrollToSection('about')} className="navbar-button">About</button>
          <button onClick={() => scrollToSection('skills')} className="navbar-button">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="navbar-button">Projects</button>
          <button onClick={() => scrollToSection('education')} className="navbar-button">Education</button>
          <button onClick={() => scrollToSection('contact')} className="navbar-button">Contact</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
