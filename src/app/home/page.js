import Banner from "@/app/home/Banner";
import Skills from "./Skills";
import FeaturedProject from "./FeaturedProject";
import WhatIDo from "./WhatIDo";
import Contact from "./Contact";
import GoToTop from "@/components/GoToTop";

const HomePage = () => {
  return (
    <div>
      <div className="lg:block md:block hidden">
        <GoToTop />
      </div>
      <Banner />
      <Skills />
      <FeaturedProject />
      <WhatIDo />
      <Contact />
    </div>
  );
};

export default HomePage;
