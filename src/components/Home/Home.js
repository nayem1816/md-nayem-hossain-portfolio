import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import "./Home.css";
import nayemLogo from "../../image/bigLogo2.png";

const Home = () => {
  return (
    <div id="home"
      style={{ height: "600px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="text-center">
        <img className="nayemLogo-style" src={nayemLogo} alt="" />
        <h2 className="mt-4 text-link-color">Here I'am Md Nayem Hossain</h2>
        <p className="text-link-color">
          I'm a Passionate <span style={{ color: "red" }}>Web Developer</span>
        </p>
        <div className="mt-4">
          <Link
            className="btn btn-primary m-2"
            to="contact"
            smooth={true}
            duration={50}
          >
            Hire Me
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1mzqyv155YOGd-WuWP5WPztPoXx_I95hr/view?usp=sharing"
            className="btn btn-primary"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
