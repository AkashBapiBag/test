import React from 'react';
import '../css/Assemble.css';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

//import NotFound from './NotFound'

import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Assemble() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};


// import React, { useState } from 'react';
// import '../css/Assemble.css';

// import Home from './Home';
// import About from './About';
// import Skills from './Skills';
// import Projects from './Projects';
// import Education from './Education';
// import Contact from './Contact';

// import Navbar from './Navbar';

// export default function Assemble() {
//   const [page, setPage] = useState('Home');

//   const renderPage = () => {
//     switch (page) {
//       case 'Home':
//         return <Home />;
//       case 'About':
//         return <About />;
//       case 'Skills':
//         return <Skills />;
//       case 'Projects':
//         return <Projects />;
//       case 'Education':
//         return <Education />;
//       case 'Contact':
//         return <Contact />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <>
//       <Navbar setPage={setPage} />
//       <div className="page-container">
//         {renderPage()}
//       </div>
//     </>
//   );
// }
