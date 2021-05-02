import React from "react";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import HomeCard from "../HomeCard/HomeCard";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";

const MainContainer = () => {
  return (
    <div>
      <Home></Home>
      <HomeCard></HomeCard>
      <About></About>
      <Resume></Resume>
      <Blog></Blog>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default MainContainer;
