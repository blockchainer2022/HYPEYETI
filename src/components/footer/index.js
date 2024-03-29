/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Discord from "../../assets/images/discord.svg";
import Twitter from "../../assets/images/twitter.svg";

const Index = () => {
  return (
    <footer className="py-6 sm:py-10 text-center ">
      <div className="container">
        <div className="sm:flex justify-between items-center">
          <p>Hype Yeti Society</p>
          <a href="#" className="font-serif block my-4 sm:my-0">
            Back to top
          </a>
          <div className="flex items-center  justify-center ">
            <a
              href="https://discord.gg/hypeyetisociety"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Discord} alt="" className="w-10" />
            </a>
            <a
              href="https://twitter.com/hypeyetisociety?s=21"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="" className="w-10 ml-4 " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
