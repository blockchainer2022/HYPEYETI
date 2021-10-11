import React from "react";
import "./style.css";
const data = {
  first: "Development of Hype Yeti",
  second: "Social Community & Brand Building  ",
  third: "Whitelist Presale - 1000 Members Only",
  fourth: "Public Mint – Reveal 24 Hours After Launch",
  fifth: "Grant Owners Access to “Sherpa Room”",
  sixth: "Development of AR Game “Yeti Hunt” Post-Mint Marketing Begins ",
  seventh:
    "Announce launch plans & private/presale access to ERC-20 “HYPE Token” ",
  eighth:
    "Launch HYPE Token & Announce Utility Airdropped tokens for Yeti NFT Owners",
  nineth:
    "Release Hypefoot & Hypeclops - Mystical Creature Breeds Each YETI owner airdropped 1 Breed Pass. ",
  tenth: "Prelaunch Event & Marketing for interactive “Yeti Hunt” AR Game   ",
  eleventh: "Limited Supply Yeti Merch Release Available in Sherpa Room ",
  twelve: "Launch of Yeti Hunt AR Game",
  thirteen: "Blue Chip NFT Partnership Announcement (Community Vote)",
  fourteenth:
    "First “YETI-Con” - Physical Yeti Hunt & Event Hosted in 4 major cities (Miami, NY, LA and Austin) Prizes awarded in ETH and YETI",
  fifteenth:
    "Continuation of Blue Chip NFT Partnerships & Development of Hype YETI Brand",
};

const Index = () => {
  return (
    <section className="py-24" id="roadmap">
      <div className="container">
        <h2 className="text-3xl capitalize text-center font-bold  mb-20">
          THE YETI MAP
        </h2>
        <div className="list-parent mx-auto rounded-full ">
          <div className="list  text-primary">
            <span>{data.first}</span>
          </div>
          <div className="list list-2 text-primary">
            <span>{data.second}</span>
          </div>
          <div className="list list-3 text-primary">
            <span>{data.third}</span>
          </div>
          <div className="list list-4 text-primary">
            <span>{data.fourth}</span>
          </div>
          <div className="list list-5 text-primary">
            <span>{data.fifth}</span>
          </div>
          <div className="list list-6 text-primary">
            <span>{data.sixth}</span>
          </div>
          <div className="list list-7 text-primary">
            <span>{data.seventh}</span>
          </div>
          <div className="list list-8 text-primary">
            <span>{data.eighth}</span>
          </div>
          <div className="list list-9 text-primary">
            <span>{data.nineth}</span>
          </div>
          <div className="list list-10 text-primary">
            <span>{data.tenth}</span>
          </div>
          <div className="list list-11 text-primary">
            <span>{data.eleventh}</span>
          </div>
          <div className="list list-12 text-primary">
            <span>{data.twelve}</span>
          </div>
          <div className="list list-13 text-primary">
            <span>{data.thirteen}</span>
          </div>
          <div className="list list-14 text-primary">
            <span>{data.fourteenth}</span>
          </div>
          <div className="list list-15 text-primary">
            <span>{data.fifteenth}</span>
          </div>
        </div>
        <div className="mobile-list text-primary text-center">
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.first}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.second}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.third}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.fourth}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.fifth}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.sixth}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.seventh}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.eighth}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.nineth}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.tenth}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.eleventh}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.twelve}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.thirteen}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.fourteenth}</span>
          </div>
          <div className="bg-secondary p-6 my-8 rounded-full">
            <span>{data.fifteenth}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
