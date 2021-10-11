import React from "react";
import CardImage2 from "../../assets/images/qImage.png";
const Index = () => {
  return (
    <section className="py-24 text-center md:text-left" id="about">
      <div className="container">
        <div className="lg:flex items-center lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <div className="mb-20 lg:w-full ">
              <img
                src={CardImage2}
                alt=""
                // style={{ maxWidth: "300px", width: "100%" }}
                className=" mx-auto sm:max-w-xs lg:max-w-none lg:w-3/4 xl:w-auto max-w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl capitalize  font-bold 2xl:text-4xl">
              What is the Hype Yeti Society ?
            </h2>
            <p className="font-serif font-light mt-8 leading-relaxed">
              The Hype Yeti Society is a community of people with a vision - a
              collection of creative minds, action-takers, and innovative
              individuals.
            </p>
            <p className="font-serif mt-8 leading-relaxed">
              At its foundation is a digital NFT collection consisting of 8,888
              uniquely designed “Yetis” hiding and being hunted on the Ethereum
              Blockchain as ERC-721 tokens. This will enable users to mint,
              collect, and trade these "l'abominable homme des neiges."
            </p>
            <p className="font-serif mt-8 leading-relaxed">
              The “Yeti” - otherwise known as the “Abominable Snowman” is a
              mythical beast said to stalk the Himalayas. It’s physical
              existence has been debated and disputed for many years, along with
              its unimaginable appearance.
            </p>
            <p className="font-serif mt-8 leading-relaxed">
              It has appeared in tales told on both sides of the mountains, in
              India, Bhutan, Tibet and Nepal, but features most strongly in the
              legends of the Sherpa, the communities that live at an average
              altitude of 12,000ft in eastern Nepal. The creature is said to
              live up high in the eternal snows and be bigger than a human, with
              long hair covering its entire body. It walks upright on two bare
              feet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
