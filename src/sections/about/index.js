import React from "react";
import CardImage1 from "../../assets/images/card1.png";
import CardImage2 from "../../assets/images/card2.png";
import "./style.css";
const Index = () => {
  return (
    <section className="py-24 about" id="team">
      <div className="container">
        <h2 className="text-3xl capitalize text-center font-bold ">
          Meet the Team
        </h2>
        <div className="mt-20 md:flex md:mt-60">
          <div className="md:w-1/2 md:px-8">
            <CardMobile text="Bobby Solez Photo, Bio, Areas of Interest/Expertise" />
            <Card text="Bobby Solez Photo, Bio, Areas of Interest/Expertise" />
          </div>
          <div className="md:w-1/2 md:px-8">
            <CardMobile
              img={CardImage2}
              title="AllenOwnz"
              text="AllenOwnz Photo, Bio, Areas of Interest/Expertise "
            />
            <Card
              img={CardImage2}
              title="AllenOwnz"
              text="AllenOwnz Photo, Bio, Areas of Interest/Expertise "
            />
          </div>
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
  title = "Yetanomics",
  text = defaultText,
}) => (
  <div className="p-4 bg-secondary rounded-xl  text-center my-6 lg:hidden">
    <div className="w-32 mx-auto mb-6">
      <img src={img} alt="" />
    </div>
    <h5 className="text-primary text-xl my-4 font-bold">{title}</h5>
    <p className="text-black font-serif text-sm mb-4">{text}</p>
  </div>
);

const Card = ({
  img = CardImage1,
  title = "Bobby Solez ",
  text = defaultText,
}) => (
  <div
    className="p-5 pl-12 bg-secondary rounded-xl my-6 hidden lg:block relative "
    style={{ minHeight: "300px" }}
  >
    <div className="w-48 xl:w-60 mx-auto mb-6 absolute card-image top">
      <img src={img} alt="" />
    </div>
    <h5 className="text-primary text-2xl xl:text-3xl my-4 font-bold text-right mr-10">
      {title}
    </h5>
    <p className="text-black font-serif  mb-4 text-base xl:text-lg">{text}</p>
  </div>
);
