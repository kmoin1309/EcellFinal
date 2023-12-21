import React from "react";
import {  UserDefault } from "../assets";

const NonCoreUserCard = ({ candidate }) => {
  const cardStyle = {
    backgroundColor: "#2C1579",
    transition: "background-color 0.3s",
  };

  if (candidate.hovercolor) {
    cardStyle["backgroundColor"] = "#2C1579"; // Set the default background color

    cardStyle[":hover"] = {
      backgroundColor: candidate.hovercolor, // Change background color on hover
    };
  }

  return (
    <div
      className="w-80 h-[120px] rounded-lg overflow-hidden shadow-lg bg-[#2C1579] m-4 p-4 flex"
      style={cardStyle}
    >
      {/* User Image */}
      <div className="w-2/5">
        <img
          src={candidate.img ? candidate.img : UserDefault}
          alt={candidate.name}
          className="w-full rounded-full h-full"
        />
      </div>

      {/* User Details */}
      <div className="w-3/5 p-2 flex flex-col justify-between">
        {/* User Name */}
        <div>
          <p className="text-md text-white font-semibold truncate  hover:text-clip">{candidate.name}</p>
          <p className="text-sm text-white">{candidate.position}</p>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-start gap-2">
          {/* LinkedIn icon */}
          {candidate.linkedin && (
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="imported-svgs/linkedin.svg" // Replace with the actual LinkedIn icon image URL
                alt="LinkedIn"
                className="w-6 h-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
          )}

          {/* GitHub icon */}
          {candidate.github && (
            <a href={candidate.github} target="_blank" rel="noopener noreferrer">
              <img
                src="imported-svgs/github.svg" // Replace with the actual GitHub icon image URL
                alt="GitHub"
                className="w-6 h-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            )}

          {/* Instagram icon */}
          {candidate.instagram && (
            <a
              href={candidate.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="imported-svgs/instagram.svg" // Replace with the actual Instagram icon image URL
                alt="Instagram"
                className="w-6 h-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
          )}
        </div>
      </div>
    </div>

  );
};

export default NonCoreUserCard;