/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ContactFrom from "../ContactFrom/ContactFrom";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact-details container mt-5 d-flex justify-content-center text-link-color"
    >
      <div className="">
        <div className="">
          <h2 class="text-center">Contact Me</h2>
          <hr className="horizantel-line" />
        </div>
        <div className="row">
          <div className="col-md-5">
            <ContactFrom></ContactFrom>
          </div>
          <div className="col-md-7 d-flex justify-content-center">
            <div className="">
              <h4 className="mt-4">
                Name: <small className="text-size">Md Nayem Hossain</small>
              </h4>
              <h4 className="mt-4">
                Email:{" "}
                <small className="text-size">
                  <a
                    className="contact-link-style"
                    href="mailto:mdnayem.hossainnym@gmail.com"
                  >
                    mdnayem.hossainnym@gmail.com
                  </a>
                </small>
              </h4>
              <h4 className="mt-4">
                Phone:{" "}
                <small className="text-size">
                  <a className="contact-link-style" href="tel:+8801841181011">
                    +8801841181011
                  </a>
                </small>
              </h4>
              <h4 className="mt-4">
                LinkedIn:{" "}
                <small className="text-size">
                  <a
                    className="contact-link-style"
                    target="_blank"
                    href="https://www.linkedin.com/in/md-nayem-hossain-nym/"
                    rel="noreferrer"
                  >
                    in/md-nayem-hossain-nym/
                  </a>
                </small>
              </h4>
              <h4 className="mt-4">
                Github:{" "}
                <small className="text-size">
                  <a
                    className="contact-link-style"
                    target="_blank"
                    href="https://github.com/nayem1816"
                    rel="noreferrer"
                  >
                    nayem1816
                  </a>
                </small>
              </h4>
              <h4 className="mt-4">
                Address:{" "}
                <small className="text-size">
                  Dhaladia, Vowel Rajabari, Sreepur, Gazipur.
                </small>
              </h4>
            </div>
          </div>
          <div className="col-12 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24501.765594944896!2d90.47216335186096!3d24.09413057863195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3932d9c38d1c0a4!2sMorol%20Bari%20Jameh%20Masjid!5e0!3m2!1sen!2sbd!4v1619879425797!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: "0", borderRadius: "10px" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
