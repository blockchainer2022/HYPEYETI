import React from "react";
import "./style.css";

const Index = ({ icon, text, link = "#" }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="text-white rounded-lg border-2 border-gray-50 border-solid py-3 px-6 flex ml-4 md:px-10 ">
        <img src={icon} alt="" className="w-5" />
        <span className="ml-2 sm:ml-4 font-bold">{text}</span>
      </button>
    </a>
  );
};

export default Index;
