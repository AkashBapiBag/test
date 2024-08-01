import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const App = () => {
  useEffect(() => {
    // Menu Show
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }

    // Remove Menu Mobile
    const navLinks = document.querySelectorAll('.nav__link');

    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show');
    }

    navLinks.forEach(n => n.addEventListener('click', linkAction));

    // Scroll Sections Active Link
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollDown = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          sectionsClass.classList.add('active-link');
        } else {
          sectionsClass.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    // Scroll Reveal Animation
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
      // reset: true
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <div>
      <header>
        <div id="nav-toggle">Toggle</div>
        <nav id="nav-menu">
          <ul>
            <li className="nav__link"><a href="#home">Home</a></li>
            <li className="nav__link"><a href="#about">About</a></li>
            <li className="nav__link"><a href="#skills">Skills</a></li>
            <li className="nav__link"><a href="#work">Work</a></li>
            <li className="nav__link"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="home">Home Section</section>
      <section id="about">About Section</section>
      <section id="skills">Skills Section</section>
      <section id="work">Work Section</section>
      <section id="contact">Contact Section</section>
    </div>
  );
};

export default App;
