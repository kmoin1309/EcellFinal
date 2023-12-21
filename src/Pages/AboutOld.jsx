import React from "react";
import CounterAnimation from "../components/Counter";
import TillNow from "../components/TillNow";
const About = () => {
  return (
    <>
      <div className="w-full min-h-screen gap-20">
        <div className="flex h-44 w-full justify-center items-center bg-[url('/about.jpg')] bg-bottom">
          <h1 className="text-white text-2xl font-sans font-semibold">
            About Us
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 my-4 px-2">
          <h3 className="text-2xl md:text-5xl font-semibold text-white">
            How E-cell Terna started?
          </h3>
          <p className="text-white text-[14px] md:text-lg text-center">
          ECell Terna, the Entrepreneurship Cell at Terna Engineering College, originated from the collaborative efforts of dedicated students and faculty sharing a common passion for nurturing entrepreneurial talent. Founded with the mission to inspire, educate, and support students interested in entrepreneurship, our journey commenced with the aim of bridging the gap between academic knowledge and real-world business challenges. We have consistently worked towards fostering an environment where innovative ideas could thrive, promoting a culture of creativity and initiative within the college community.

          </p>
        </div>
        <AboutWork/>
        <TillNow/>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-4 my-4 mb-32 px-2">
          <h3 className="text-2xl md:text-5xl font-semibold text-white">
            Our Goal
          </h3>
          <p className="text-white text-[14px] md:text-lg text-center">
          
Looking to the future, ECell Terna aspires to create a supportive ecosystem for aspiring entrepreneurs. Our goals include expanding outreach, collaborating with industry experts, and providing mentorship to facilitate the development of entrepreneurial skills. By offering resources, networking opportunities, and practical experiences, we strive to empower students, laying the foundation for a generation of innovative leaders and successful business pioneers.
          </p>
        </div>
      </div>
    </>
  );
};

const HowStarted = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 w-full min-h-[615px] md:flex-row md:gap-20">
        {/* IMAGE */}

        <div className="w-[360px] h-[280px] md:h-[345px] md:w-[360px]">
          <div className="relative w-full h-full">
            <img
              className="absolute h-56 md:h-72"
              src="/about.jpg"
              alt=""
              srcset=""
            />
            <img
              className="absolute h-56 md:h-72 top-14 left-24"
              src="/about.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
          <h3 className="text-2xl md:text-5xl font-semibold text-white">
            How E-cell Terna started?
          </h3>
          <p className="text-white text-[14px] md:text-lg text-center">
            The inception of the E-Cell at Terna Engineering College arose from
            a collective vision to cultivate a platform that nurtures
            entrepreneurial skills and innovation among its students.
          </p>
        </div>
      </div>
    </>
  );
};

const AboutWork = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center p-8 md:px-60 md:gap-6 gap-4 ">
        <h3 className="text-2xl md:text-5xl font-semibold text-white text-center">
          About Our Work
        </h3>
        <p className="text-white text-[14px] md:text-lg text-center">
          Up to the present moment, our Engineering E-Cell has orchestrated a
          total of 10 impactful events, established collaborative partnerships
          with 17 innovative startups, and gathered a thriving community of over
          350 members within our department, fostering an environment ripe for
          innovation and entrepreneurial endeavors.
        </p>

        {/* <div className="flex justify-center items-center">
          <div className=" w-36 h-32 md:w-52 md:h-48 py-6 flex flex-col justify-center items-center gap-1">
            <h1 className="text-5xl md:text-6xl text-white">
              <CounterAnimation targetValue={25}/>
            </h1>
            <p className="text-white font-base text-lg">Events</p>
          </div>
          <div className=" w-36 h-32 md:w-52 md:h-48 py-6 flex flex-col justify-center items-center gap-1 border-x-2 border-slate-500">
            <h1 className="text-5xl md:text-6xl text-white"><CounterAnimation targetValue={19}/></h1>
            <p className="text-white font-base text-lg">Startups</p>
          </div>
          <div className=" w-36 h-32 md:w-52 md:h-48 py-6 flex flex-col justify-center items-center gap-1">
            <h1 className="text-5xl md:text-6xl text-white"><CounterAnimation targetValue={255}/>+</h1>
            <p className="text-white font-base text-lg">Members</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

const Goals = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-center items-center gap-10 w-full min-h-[615px] md:flex-row-reverse md:gap-20">
        {/* IMAGE */}

          <img
              className="h-56 md:h-72"
              src="/about.jpg"
              alt=""
              srcset=""
            />

        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-4 md:gap-4">
          <h3 className="text-2xl md:text-5xl font-semibold text-white">
            Our Goal
          </h3>
          <p className="text-white text-[14px] md:text-lg text-center">
            Our vision for the Engineering E-Cell is to serve as a dynamic hub, empowering and nurturing aspiring entrepreneurs by providing them with the necessary resources, mentorship, and opportunities, fostering a culture of innovation and sustainable growth within our academic community.
          </p>
        </div>
      </div>
    </>
  )
};

export default About;
