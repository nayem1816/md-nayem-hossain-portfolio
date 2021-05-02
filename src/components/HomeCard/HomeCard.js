import React from "react";
import "./HomeCard.css";
import Typewriter from "typewriter-effect";

const HomeCard = () => {
  return (
    <div className="container home-info shadow-lg text-link-color">
      <div className="homeInfo-main">
        <div className="row">
          <div className="col-md-4">
            <div className="black-color home-card-left text-link-color">
              <h5 className="black-color text-link-color">Personal Details</h5>
              <hr className=""></hr>
              <p>
                Email:{" "}
                <span >
                  <a style={{textDecoration:'none', color:'red'}} href="mailto:mdnayem.hossainnym@gmail.com">
                    mdnayem.hossainnym@gmail.com
                  </a>
                </span>
              </p>
              <p>Language: Bangla</p>
              <p>Nationality: Bangladeshi</p>
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="">
              <h4 className="">
                <span className="text-link-color">I am,</span>
                <span style={{ color: "red" }}>
                  {" "}
                  <Typewriter
                    options={{
                      strings: [
                        "web developer",
                        "web designer",
                        "frontend developer",
                        "javaScript developer",
                        "mern stack developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h4>
              <p className="text-link-color">
                I can provide clean code and pixel perfect design. I also make
                website more & more interactive with web animations. I also
                experienced with all stages of the development cycle for dynamic
                web projects.
              </p>
              <h3>nayem</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
