import { useState } from "react";

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
  const [clicked, setClicked] = useState(0);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className="py-16 bg-secondary text-primary" id="faq">
      <div className="container">
        <h2 className="text-3xl capitalize text-center font-bold mb-14">
          FAQs
        </h2>
        <div className="">
          {accordianData.map((v, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
