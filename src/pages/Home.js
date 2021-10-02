import React from "react";
import { Layout } from "../components";
import {
  HeroSection,
  AboutSection,
  QSection,
  Gallary,
  RoadMap,
  FaqSection,
} from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <AboutSection />
        <QSection />
        <Gallary />
        <RoadMap />
        <FaqSection />
      </Layout>
    </div>
  );
};

export default Home;
