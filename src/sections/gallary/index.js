import React from "react";
import Gallary1 from "../../assets/images/g1.png";
import Gallary2 from "../../assets/images/g2.png";
import Gallary3 from "../../assets/images/g3.png";
import Gallary4 from "../../assets/images/g4.png";
import Gallary5 from "../../assets/images/g5.png";
import Gallary6 from "../../assets/images/g6.png";
import Gallary7 from "../../assets/images/g7.png";
import Gallary8 from "../../assets/images/g8.png";

const Index = () => {
  return (
    <section className="py-24 bg-secondary" id="arts">
      <div className="container">
        <div className="flex flex-wrap">
          <Wrapper />
          <Wrapper image={Gallary2} />
          <Wrapper image={Gallary3} />
          <Wrapper image={Gallary4} />
          <Wrapper image={Gallary5} />
          <Wrapper image={Gallary6} />
          <Wrapper image={Gallary7} />
          <Wrapper image={Gallary8} />
        </div>
      </div>
    </section>
  );
};

export default Index;

const Wrapper = ({ image = Gallary1 }) => (
  <div className="w-2/4 px-3 md:p-6 lg:p-10 sm:w-1/4">
    <img src={image} alt="gallary" className="w-full mt-6 mx-auto" />
  </div>
);
