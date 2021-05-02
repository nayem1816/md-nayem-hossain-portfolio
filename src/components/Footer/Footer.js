import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5" style={{backgroundColor:'black', padding:'15px', color:'white'}}>
      <p className="text-center">
        {new Date().getFullYear()}, All Rights Reserved <Link style={{textDecoration:'none'}} to="/">Md Nayem Hossain.</Link>
      </p>
    </div>
  );
};

export default Footer;
