import React from "react";
import CardImage2 from "../../assets/images/qImage.png";
const Index = () => {
  return (
    <section className="py-24 text-center md:text-left">
      <div className="container">
        <div className="md:flex items-center md:flex-row-reverse">
          <div className="md:w-1/2">
            <div className="mb-20 md:w-full">
              <img
                src={CardImage2}
                alt=""
                // style={{ maxWidth: "300px", width: "100%" }}
                className="mx-auto max-w-xs md:max-w-none md:w-3/4 xl:w-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl capitalize  font-bold">
              What is Hypeyetisociety ?
            </h2>
            <p className="font-serif text-sm mt-8 leading-relaxed">
              Hypeyetisociety is a collection of 8888 randomly generated from
              over 350 carefully designed assets.The digital collectibles are
              established within the Ethereum Blockchain as ERC-721 tokens,
              which enables users to mint, collect, and trade them. Unpack a
              Hypeyetisociety with just 0.05 ETH, UNTIL PRE-SALE LASTS!! The
              Minimum Floor price will increase after that. The Pandas are an
              output of a beautiful and rare combination of many properties and
              accessories never seen before on any other collectibles. They are
              cool, authentic, and distinct.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
