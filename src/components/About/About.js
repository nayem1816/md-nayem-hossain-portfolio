import React from "react";
import nayemImage from "../../image/nayem.jpg";
import "./About.css";
import webDesign from "../../image/icon/WebDesi.png";
import webDevelopment from "../../image/icon/WebDesi.png";
import android from "../../image/icon/WebDesi.png";

const About = () => {
  return (
    <div id="about" className="container mt-5 text-link-color">
      <h2 class="text-center">About Me</h2>
      <hr className="horizantel-line" />
      <div className="row p-5">
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <img
              className="img-fluid about-image border p-1"
              src={nayemImage}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="">
            <h2>Hi, I'am Md Nayem Hossain</h2>
            <p>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <h4 className="mt-2">
              Full Name:{" "}
              <span className="about-image-side-text">Md Nayeem Hossain</span>
            </h4>
            <h4 className="mt-2">
              Age: <span className="about-image-side-text">20</span>
            </h4>
            <h4 className="mt-2">
              Nationality:{" "}
              <span className="about-image-side-text">Bangladeshi</span>
            </h4>
            <h4 className="mt-2">
              Language: <span className="about-image-side-text">Bangla</span>
            </h4>
            <h4 className="mt-2">
              Address:{" "}
              <span className="about-image-side-text">
                Dhaladia, Rajabari, Sreepur, Gazipur
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="">
          <h2 class="text-center">Services</h2>
          <hr className="horizantel-line" />
        </div>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <img src={webDesign} alt="" />
            <h5 className="mt-3">Web Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <img src={webDevelopment} alt="" />
            <h5 className="mt-3">Web Development</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <img src={android} alt="" />
            <h5 className="mt-3">Android</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <img src={android} alt="" />
            <h5 className="mt-3">Android</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <img src={android} alt="" />
            <h5 className="mt-3">Android</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <div className="border p-4 rounded">
            <img src={android} alt="" />
            <h5 className="mt-3">Android</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              saepe consequatur mollitia explicabo sint distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
