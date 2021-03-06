import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";
import { animateScroll as scroll, Link } from "react-scroll";

const Header = () => {
  return (
    <div className="fixed-top sticky-topbar">
      <nav class="container navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link
            className="navbar-brand mouse-pointer text"
            to="home"
            smooth={true}
            duration={50}
          >
            NAYEM
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <Link
                className="nav-link ms-5 mouse-pointer text"
                to="home"
                smooth={true}
                duration={50}
              >
                Home
              </Link>
              <Link
                className="nav-link ms-5 mouse-pointer text"
                to="about"
                smooth={true}
                duration={50}
              >
                About
              </Link>
              <Link
                className="nav-link ms-5 mouse-pointer text"
                to="resume"
                smooth={true}
                duration={50}
              >
                Resume
              </Link>
              <Link
                className="nav-link ms-5 mouse-pointer text"
                to="blog"
                smooth={true}
                duration={50}
              >
                Blog
              </Link>
              <Link
                className="nav-link ms-5 mouse-pointer text"
                to="project"
                smooth={true}
                duration={50}
              >
                Project
              </Link>
              <Link
                className="nav-link ms-5 mouse-pointer text"
                to="contact"
                smooth={true}
                duration={50}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
