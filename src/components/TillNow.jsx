import React from "react";
import Lottie from "lottie-react";
import Colleges from "../assets/TillNow/college.json";
import CounterAnimation from './Counter'
import Publications from "../assets/TillNow/publication.json";
import Startups from "../assets/TillNow/startups.json";
import Associates from "../assets/TillNow/associate.json";

const TillNow = () => {
  return (
    <>
      <div className="min-h-[500px] md:min-h-[100px] w-[100%] pb-16 md:pb-0 flex flex-col justify-center items-center lg:px-16 space-y-14">
        <h1 className="text-white text-4xl font-Onest font-bold pb-4 border-b-4 border-stone-300">
          Till Now
        </h1>

        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="flex">
          <div className="flex w-full gap-4 align-baseline">
            <div className="w-16 md:w-32">
              <Lottie animationData={Colleges} />
            </div>
            <div className="flex w-full text-white flex-col justify-center gap-1">
              <h1 className="text-3xl font-semibold md:text-5xl"><CounterAnimation targetValue={380}/>+</h1>
              <p className="text-md text-stone-200 ml-2">Colleges</p>
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div className="w-16 md:w-32">
              <Lottie animationData={Publications} />
            </div>
            <div className="flex w-full text-white flex-col justify-center gap-1">
              <h1 className="text-3xl font-semibold md:text-5xl "><CounterAnimation targetValue={400}/>+</h1>
              <p className="text-md text-stone-200 ml-2">Publications</p>
            </div>
          </div>
          </div>
          <div className="flex">
          <div className="flex w-full gap-4">
            <div className="w-16 md:w-32">
              <Lottie animationData={Startups} />
            </div>
            <div className="flex w-full text-white flex-col justify-center gap-1">
              <h1 className="text-3xl font-semibold md:text-5xl"><CounterAnimation targetValue={170}/>+</h1>
              <p className="text-md text-stone-200 ml-2">Startups</p>
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div className="w-16 md:w-32">
              <Lottie animationData={Associates} />
            </div>
            <div className="flex w-full text-white flex-col justify-center gap-1">
              <h1 className="text-3xl font-semibold md:text-5xl"><CounterAnimation targetValue={310}/>+</h1>
              <p className="text-md text-stone-200 ml-2">Associates</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TillNow;