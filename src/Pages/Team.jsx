import React from "react";
import TeamsPills from "../components/TeamsPills";

const Team = () => {
  return (
    <>
    <div
      className="font-Onest flex justify-center min-h-screen"
    >
      <div className="max-w-7xl my-10 flex justify-center items-center py-10">
        <div className="lg:mt-0">
          <h1 className="my-8 text-center text-3xl font-semibold text-white md:text-5xl">
            Meet the team
          </h1>
          <h3 className="my-6 text-center text-stone-400 text-sm md:text-lg">
            Meet the team planning, innovating and executing various tasks of
            this community!
          </h3>
        <div className="flex w-full justify-center mt-4 mb-8">
          {/* <select className=" text-white rounded-3xl px-12 py-3 bg-[#2c1579ea] accent-slate-200" name="yr" id="">
            <option className="text-white" defaultChecked value="Select a year">Choose a year</option>
            <option className="text-white"  value="2023">2023</option>
            <option className="text-white"  value="2023">2022</option>
            <option className="text-white"  value="2023">2021</option>
            <option className="text-white"  value="2023">2020</option>
          </select> */}
        </div>
          <TeamsPills />
        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
