import React from "react";

const skills = [
  { name: "HTML5", percent: "95%" },
  { name: "CSS3", percent: "90%" },
  { name: "JavaScript", percent: "85%" },
  { name: "React", percent: "70%" },
  { name: "Node Js", percent: "55%" },
  { name: "WordPress", percent: "75%" },
];

const Resume = () => {
  return (
    <div id="resume" className="resume-details mt-5 d-flex justify-content-center text-link-color">
      <div className="">
        <div className=" d-flex justify-content-center">
          <div className="row">
            <div className="">
              <h2 class="text-center">Resume</h2>
              <hr className="horizantel-line" />
            </div>
            {skills.map((skill) => (
              <div className="col-md-6 col-sm-12">
                <div className="p-3">
                  <h5>
                    {skill.name} - {skill.percent}
                  </h5>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${skill.percent}` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1mzqyv155YOGd-WuWP5WPztPoXx_I95hr/view?usp=sharing"
            className="btn btn-primary btn-style"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center px-4">
              <div className="">
                <h3>CORE SKILLS/COMPETENCIES</h3>
                <ul className="lh-lg">
                  <li>Web Design and Development using MERN Stack.</li>
                  <li>Frontend Development and Comparative Programming.</li>
                  <li>Installing and configuring CMS like WordPress.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center ">
              <div className="px-4">
                <h3>EDUCATIONAL BACKGROUND</h3>
                <ul className="lh-lg">
                  <li>
                    BSC (Computer Science and Engineering) from Uttara
                    University in 2020
                  </li>
                  <li>
                    HSC (Science) from Iqbal Siddiquee College, Gazipur in 2018
                  </li>
                  <li>
                    SSC (Science) from Iqbal Siddiquee School & College, Gazipur
                    in 2016
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center px-4">
              <div className="">
                <h3>PERSONAL STRENGTH</h3>
                <ul className="lh-lg">
                  <li>Open to any challenging work.</li>
                  <li>Strong motivational and leadership skills.</li>
                  <li>
                    Ability to work as an individual as well as in a group.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
