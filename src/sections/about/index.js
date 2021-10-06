/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CardImage1 from "../../assets/images/card1.png";
import CardImage2 from "../../assets/images/card2.png";
import CardImage3 from "../../assets/images/card3.png";
import CardImage4 from "../../assets/images/card4.png";
import Youtube from "../../assets/images/youtube2.svg";
import Instagram from "../../assets/images/instagram2.svg";
import Twitter from "../../assets/images/twitter2.svg";
import Discord from "../../assets/images/tiktok.svg";

import "./style.css";
const Index = () => {
  return (
    <section className="py-24 about" id="team">
      <div className="container">
        <h2 className="text-3xl capitalize text-center font-bold ">
          Meet the Team
        </h2>
        <div className="mt-20 md:flex md:mt-10 md:flex-wrap">
          <div className="md:w-1/2  lg:w-1/4 md:px-4">
            <CardMobile
              text="Interest/Expertise"
              youtube="https://www.youtube.com/c/bobbysolez"
              insta="https://www.instagram.com/bobbysolez/?hl=en"
              twitter="https://twitter.com/BobbySolez"
              tiktok="https://www.tiktok.com/@bobbysolez?lang=en"
            />
          </div>
          <div className="md:w-1/2 lg:w-1/4 md:px-2">
            <CardMobile
              text="Interest/Expertise"
              title="Allen Ownz"
              img={CardImage2}
              youtube="https://www.youtube.com/channel/UCloiKJi1f9ie7kjmOWBpy8Q"
              insta="https://www.instagram.com/allenownz/?hl=en"
              twitter="https://twitter.com/Allenownz"
              tiktok="https://www.tiktok.com/@allenownz?lang=en"
            />
          </div>
          <div className="md:w-1/2 lg:w-1/4 md:px-2">
            <CardMobile
              text="Lead Developer"
              title="Tech Yeti"
              img={CardImage3}
            />
          </div>
          <div className="md:w-1/2 lg:w-1/4 md:px-2">
            <CardMobile text="Adviser" title="Southern Yeti" img={CardImage4} />
          </div>
          {/* <Card text="Bobby Solez Photo, Bio, Areas of Interest/Expertise" /> */}
          {/* <div className="md:w-1/2 md:px-2">
            <CardMobile
              img={CardImage2}
              title="AllenOwnz"
              text="AllenOwnz Photo, Bio, Areas of Interest/Expertise "
            />
            {/* <Card
              img={CardImage2}
              title="AllenOwnz"
              text="AllenOwnz Photo, Bio, Areas of Interest/Expertise "
            /> 
          </div> */}
          {/* <div className="md:w-1/2 md:px-8 md:mt-20">
            <CardMobile
              img={CardImage3}
              title="Tech Yeti "
              text="Tech Yeti Photo, Bio, Areas of  Lead Developer "
            />
            <Card
              img={CardImage3}
              title="Tech Yeti "
              text="Tech Yeti Photo, Bio, Areas of  Lead Developer"
            />
          </div> */}
          {/* <div className="md:w-1/2 md:px-8  md:mt-20">
            <CardMobile
              img={CardImage4}
              title="Southern Yeti "
              text="Southern Yeti,  Photo, Bio, Areas of  Adviser "
            />
            <Card
              img={CardImage4}
              title="Southern Yeti "
              text="Southern Yeti , Bio, Areas of  Adviser"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Index;

const defaultText =
  "The team has reserved 100 Hypeyetisociety for comm-unity giveaways, early editions. All remaining Hypeyetisociety are up for sale. Everyone should have an equal opportunity to be a member of the Hypeyetisociety community.";

const CardMobile = ({
  img = CardImage1,
  title = "Bobby Solez ",
  text = defaultText,
  insta = "#",
  youtube = "#",
  twitter = "#",
  tiktok = "#",
}) => (
  <div className="p-4 bg-secondary rounded-xl  text-center my-6 ">
    <div className="w-28 mx-auto mb-6">
      <img src={img} alt="" />
    </div>
    <h5 className="text-primary text-2xl mt-4 font-bold">{title}</h5>
    <p className="text-black font-serif text-sm mb-4">{text}</p>
    <ul className="flex justify-center">
      <li>
        <a
          className="inline-block mr-2"
          href={youtube}
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6" src={Youtube} alt="youtube" />
        </a>
      </li>
      <li>
        <a
          className="inline-block mr-2"
          href={insta}
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6" src={Instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a
          className="inline-block mr-2"
          href={twitter}
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6" src={Twitter} alt="twitter" />
        </a>
      </li>
      <li>
        <a
          className="inline-block mr-2"
          href={tiktok}
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6" src={Discord} alt="discord" />
        </a>
      </li>
    </ul>
  </div>
);

// const Card = ({
//   img = CardImage1,
//   title = "Bobby Solez ",
//   text = defaultText,
// }) => (
//   <div
//     className="p-5 pl-12 bg-secondary rounded-xl my-6 hidden lg:block relative "
//     style={{ minHeight: "200px" }}
//   >
//     <div className="w-32 xl:w-48 mx-auto mb-6 absolute card-image top">
//       <img src={img} alt="" className="max-w-full" />
//     </div>
//     <h5 className="text-primary text-2xl xl:text-3xl my-4 font-bold text-right mr-10">
//       {title}
//     </h5>
//     <p className="text-black font-serif  mb-4 text-base xl:text-lg">{text}</p>
//   </div>
// );
