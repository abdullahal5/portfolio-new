import Banner from "@/app/home/Banner";
import Skills from "./Skills";
import FeaturedProject from "./FeaturedProject";
import WhatIDo from "./WhatIDo";
import Footer from "@/components/Footer";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <FeaturedProject />
      <WhatIDo />
      <Contact/>
    </div>
  );
};

export default HomePage;
