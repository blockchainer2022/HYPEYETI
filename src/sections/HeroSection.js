import HeroImage from "../assets/images/heroImage.png";
import { Button } from "../components";
import Twitter from "../assets/images/twitter.svg";
import Discord from "../assets/images/discord.svg";
const HeroSection = () => {
  return (
    <section className="hero py-28 md:py-40">
      <div className="container">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <div className="w-40 md:w-80 mx-auto">
              <img src={HeroImage} alt="hero-img" />
            </div>
          </div>
          <div className="text-center my-8 md:w-1/2">
            <div className="">
              <h1 className="font-bold text-3xl mb-6 md:text-5xl  md:mx-auto">
                Welcome to Hype Yeti Society
              </h1>
              <p className="font-serif text-base capitalize leading-relax md:mt-10  md:mx-auto">
                The Legend Of The Yeti Begins Here. In The Digital Himalayas
                Hides 8,888 Unique, Mythical Yetis, Ready To Be Hunted.
              </p>
              <p className="font-serif text-base capitalize leading-relax md:mt-5  md:mx-auto">
                Contrary To Popular Belief That Yetis Are Dangerous, Unfriendly
                Beasts... The Yetis In Our Collection Are Peaceful, Friendly,
                And Loaded With HYPE.
              </p>
              <p className="font-serif text-base capitalize leading-relax md:mt-5  md:mx-auto">
                Are you ready for the hunt?
              </p>
              <div className="flex justify-center items-center   md:w-96 md:mx-auto mt-10">
                <Button
                  text="Twitter"
                  icon={Twitter}
                  link="https://twitter.com/hypeyetisociety?s=21"
                />
                <Button
                  text="Discord"
                  icon={Discord}
                  link="https://discord.gg/hypeyetisociety"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
