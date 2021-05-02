import React from "react";
import "./Project.css";
import banCric from "../../image/project/BanCrick.PNG";
import countryInfo from "../../image/project/countryInfo.PNG";
import fiverNetwork from "../../image/project/fiverNetwork.PNG";
import GlobalChapLeage from "../../image/project/GlobalChapLeage.PNG";
import mobileMarket from "../../image/project/mobileMarket.PNG";
import SuperRide from "../../image/project/SuperRide.PNG";

const projects = [
  {
    img: fiverNetwork,
    title: "Fiver Network",
    details: "Internet Service Provider website.",
    link: "https://fiver-network.web.app/",
  },
  {
    img: mobileMarket,
    title: "Mobile Market",
    details: "E-commerce based website.",
    link: "https://mobile-market-6567c.web.app/",
  },
  {
    img: GlobalChapLeage,
    title: "Global Championship League",
    details: "Football club details website.",
    link: "https://hardcore-kilby-3a6ef9.netlify.app/",
  },
  {
    img: SuperRide,
    title: "Super Ride",
    details: "Ride Shearing website.",
    link: "https://inspiring-swirles-ab84a9.netlify.app/",
  },
  {
    img: countryInfo,
    title: "Country Info",
    details: "All Country Details website.",
    link: "https://adoring-chandrasekhar-960186.netlify.app/",
  },
  {
    img: banCric,
    title: "Bangladesh XI",
    details: "Bangladesh Cricket Player Salary website.",
    link: "https://sad-yalow-814c78.netlify.app/",
  },
];

const Project = () => {
  return (
    <div id="project" className="project-details container mt-5 d-flex justify-content-center text-link-color">
      <div className="">
        <div className="">
          <h2 class="text-center">Project</h2>
          <hr className="horizantel-line" />
        </div>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 p-4">
              <div className="p-3 text-center border rounded">
                <img className="project-img shadow" src={project.img} alt="" />
                <h4 className="mt-3">{project.title}</h4>
                <p>{project.details}</p>
                <a
                  className="btn btn-primary btn-style"
                  href={`${project.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  See Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
