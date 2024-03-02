import Banner from "@/app/home/Banner";
import Skills from "./Skills";
import FeaturedProject from "./FeaturedProject";
import WhatIDo from "./WhatIDo";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <FeaturedProject />
      <WhatIDo />
    </div>
  );
};

export default HomePage;
