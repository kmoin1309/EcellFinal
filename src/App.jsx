import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./components/Contact";
import Team from "./Pages/Team";
import About from "./Pages/AboutOld";
import Eventpage from "./Pages/Eventpage"
import Eventslider from "./components/Eventslider"
import TeamsPills from "./components/TeamsPills";
import Register from "./Pages/Register";

const App = () => {
  return (
    <>
    {/* <div className="pb-16"> */}
      <Navbar />
    {/* </div> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Eventpage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </>
  );
};

export default App;
