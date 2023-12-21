import React from "react";
import Events from "../components/Eventslider";
import Contact from "../components/Contact";
import Landing from '../components/Landing';
import AboutComponent from "../components/About";
import TillNow from "../components/TillNow";

const Home = () => {
  return (
    <>
        <div className="h-screen w-[100%] z-5">
          <Landing></Landing>
          <AboutComponent></AboutComponent>
          <TillNow></TillNow>
          <Events></Events>
          <Contact></Contact>
        </div>
    </>
  );
};

export default Home;
