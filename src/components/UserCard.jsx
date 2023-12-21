import React from "react";
import { UserDefault } from "../assets";

const UserCard = ({ candidate }) => {
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
      className="w-64 px-16 py-8 rounded-lg overflow-hidden shadow-xl bg-[#2C1579] m-4"
      style={cardStyle}
    >
      {/* User Image */}
      <div className="w-full flex items-center justify-center">
        <img
          src={candidate.img ? candidate.img : UserDefault}
          alt={candidate.name}
          className="w-28 h-28 rounded-full object-contain object-center"
        />
      </div>

      {/* User Name */}
      <div className="pb-3">
        <p className="text-center text-white text-xl font-semibold">{candidate.name}</p>
        <p className="text-center text-sm text-stone-400">
          {candidate.position}
        </p>
      </div>

      {/* Social Media Buttons */}
      <div className="flex justify-center gap-5">
        {/* LinkedIn icon */}
        {candidate.linkedin && (
          <a
            href={candidate.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img
              src="imported-svgs/linkedin.svg" // Replace with the actual LinkedIn icon image URL
              alt="LinkedIn"
              className="w-6 h-6 "
              style={{ filter: 'brightness(0) invert(1)' }}            />
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
            className="mr-2"
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
  );
};

export default UserCard;
