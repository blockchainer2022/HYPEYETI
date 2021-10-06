import { useState } from "react";
import Timer from "../timer";
import Logo from "../../assets/images/Logo.png";
import Hamburger from "../../assets/images/hamburger.svg";
import Youtube from "../../assets/images/youtube2.svg";
import Instagram from "../../assets/images/instagram2.svg";
import Twitter from "../../assets/images/twitter2.svg";
import Discord from "../../assets/images/discord2.svg";
import "./style.css";

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header>
      {/* Timer Header  Start*/}
      <div className="bg-primary shadow">
        <div className="container p-2">
          <div className="w-full max-w-md mx-auto flex justify-between items-center flex-col sm:flex-row">
            <h1 className="text-2xl sm:text-4xl mb-4 sm:mb-2 font-bold">
              Mint Day
            </h1>
            <Timer />
          </div>
        </div>
      </div>
      {/* Timer Header End */}
      <div className="bg-secondary text-black font-serif relative">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="w-60">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="w-5 lg:hidden cursor-pointer" onClick={handleOpen}>
              <img src={Hamburger} alt="ham" />
            </div>
            <div className=" items-center hidden lg:flex">
              <ul className="flex items-center">
                <MenuItem link={"#"} text="Buy a Yeti" />
                <MenuItem link={"#about"} text="About" />
                <MenuItem link={"#team"} text="Team" />
                <MenuItem link={"#roadmap"} text="Yetimap" />
                <MenuItem link={"#arts"} text="Members" />
                <MenuItem link={"#faq"} text="FAQs" />
              </ul>
              <ul className="flex items-center ml-10">
                <SocialItem
                  link="https://instagram.com/hypeyetisociety?utm_medium=copy_link"
                  image={Instagram}
                />
                <SocialItem
                  link="https://discord.gg/hypeyetisociety"
                  image={Discord}
                />
                <SocialItem
                  link="https://twitter.com/hypeyetisociety?s=21"
                  image={Twitter}
                />
              </ul>
            </div>
          </div>
        </div>
        <div className={`mobile-nav ${open ? "active" : null}`}>
          <ul className="text-center">
            <MobileMenuItem
              link={"#"}
              text="Buy a Yeti"
              handleOpen={handleOpen}
            />
            <MobileMenuItem
              link={"#about"}
              text="About"
              handleOpen={handleOpen}
            />
            <MobileMenuItem
              link={"#team"}
              text="Team"
              handleOpen={handleOpen}
            />
            <MobileMenuItem
              link={"#roadmap"}
              text="Yetimap"
              handleOpen={handleOpen}
            />
            <MobileMenuItem
              link={"#arts"}
              text="Members"
              handleOpen={handleOpen}
            />
            <MobileMenuItem link={"#faq"} text="FAQs" handleOpen={handleOpen} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Index;

const MenuItem = ({ link, text }) => (
  <li className="pl-8 text-md hover:text-primary">
    <a href={link} className="hover:text-primary font-bold">
      {text}
    </a>
  </li>
);
const MobileMenuItem = ({ link, text, handleOpen }) => (
  <li
    className="py-4 mx-auto hover:text-primary cursor-pointer transition"
    onClick={handleOpen}
  >
    <a href={link} className="font-bold">
      {text}
    </a>
  </li>
);

const SocialItem = ({ link, image }) => (
  <li className="pl-8 text-md ">
    <a href={link}>
      <img src={image} alt="social-icons" className="w-6" />
    </a>
  </li>
);
