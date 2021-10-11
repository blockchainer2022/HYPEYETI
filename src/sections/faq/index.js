/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Instagram from "../../assets/images/instagram2.svg";
import Twitter from "../../assets/images/twitter2.svg";
import Discord from "../../assets/images/discord2.svg";
const accordianData = [
  {
    question: "how will Hypeyetisociety be launched?",
    answer:
      "Join our Discord or follow us on Twitter for updates. All hypeyetisociety purchases will be made at https://hypeyetisociety.io",
  },
  {
    question: "what are Hypeyetisociety?",
    answer:
      "Join our Discord or follow us on Twitter for updates. All hypeyetisociety purchases will be made at https://hypeyetisociety.io",
  },
  {
    question: "how much does each Hypeyetisociety cost?",
    answer:
      "Join our Discord or follow us on Twitter for updates. All hypeyetisociety purchases will be made at https://hypeyetisociety.io",
  },
  {
    question: "what are Hypeyetisociety made of?",
    answer:
      "Join our Discord or follow us on Twitter for updates. All hypeyetisociety purchases will be made at https://hypeyetisociety.io",
  },
  {
    question: "what is the smart contract address for Hypeyetisociety?",
    answer:
      "Join our Discord or follow us on Twitter for updates. All hypeyetisociety purchases will be made at https://hypeyetisociety.io",
  },
];

const Index = () => {
  // const [clicked, setClicked] = useState(0);

  // const toggle = (index) => {
  //   if (clicked === index) {
  //     return setClicked(null);
  //   }
  //   setClicked(index);
  // };

  return (
    <section className="py-16 bg-secondary text-primary" id="faq">
      <div className="container">
        <h2 className="text-3xl capitalize text-center font-bold mb-8">FAQs</h2>
        <div className="text-center text-black max-w-2xl w-full mx-auto font-serif">
          {/* {accordianData.map((v, i) => (
            <div
              key={i}
              className=" border-2 border-primary border-sloid my-4  p-4 rounded-xl"
            >
              <div className="cursor-pointer" onClick={() => toggle(i)}>
                <h6
                  className=" capitalize text-primary "
                  style={{ userSelect: "none" }}
                >
                  {v.question}
                </h6>
              </div>
              <div
                className={` text-xs transition ease-in-out duration-500 ${
                  clicked === i
                    ? "h-auto max-h-72 py-2"
                    : "overflow-hidden max-h-0 h-0"
                }`}
              >
                <p className="max-w-2xl w-full text-black font-serif">
                  {v.answer}
                </p>
              </div>
            </div>
          ))} */}
          <p>
            Join our Discord & Follow us on Twitter for updates. Please feel
            free to message us with questions on Discord or Twitter. All Hype
            Yeti purchases will be made at
          </p>
          <a href="https://hypeyetisociety.io" className="text-primary">
            https://hypeyetisociety.io
          </a>
          <ul className="flex items-center mt-5 justify-center">
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
    </section>
  );
};

export default Index;
const SocialItem = ({ link, image }) => (
  <li className="pl-8 text-md ">
    <a href={link}>
      <img src={image} alt="social-icons" className="w-6" />
    </a>
  </li>
);
