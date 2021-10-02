import React from "react";
import "./style.css";
const data = {
  first: "1. Build of Amazing Art",
  second: "2. Start Social Medias",
  third: "3. Collaborations with Top NFT Projects for Giveaways",
  fourth: "4. Meme Contest",
  fifth: "5. Whitelist Presale",
  sixth: "6. Public Mint – 100 Sell out",
  seventh: "7. Revel of Yeti’s After 24 Hours of Launch",
  eighth: "8. Start Development of Yeti Hunt AR game",
  nineth:
    "9. Launch Yeti Gold ERC-20 Token, which will help Reward Yeti Hunt game winners. (Free claims will be available for all Yeti Holders)",
  tenth: "10. Start Building Hype Around Yeti Hunt Game before the Game Launch",
  eleventh: "11. Launch of Yeti Hunt Game",
  twelve: "12. Promotions of Yeti Hunt Game at Physical Events",
  thirteen:
    "13. Promote it in Developing Countries togain Higher Traffic towards game",
  fourteenth: "14. Furthermore roadmap will be Updated as soon as possible",
};

const Index = () => {
  return (
    <section className="py-24" id="roadmap">
      <div className="container">
        <h2 className="text-3xl capitalize text-center font-bold  mb-20">
          Roadmap
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
        </div>
        <div className="mobile-list text-primary">
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
        </div>
      </div>
    </section>
  );
};

export default Index;
