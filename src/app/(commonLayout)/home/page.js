import Banner from "@/app/(commonLayout)/home/Banner";
import Skills from "./Skills";
import FeaturedProject from "./FeaturedProject";
import WhatIDo from "./WhatIDo";
import Contact from "./Contact";
import GoToTop from "@/components/home/GoToTop";
import Footer from "@/components/home/Footer";

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
