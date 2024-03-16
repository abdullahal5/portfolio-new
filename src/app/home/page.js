import Banner from "@/app/home/Banner";
import Skills from "./Skills";
import FeaturedProject from "./FeaturedProject";
import WhatIDo from "./WhatIDo";
import Contact from "./Contact";
import GoToTop from "@/components/GoToTop";
import Footer from "@/components/Footer";

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
      <Footer/>
    </div>
  );
};

export default HomePage;
