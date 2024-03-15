import GoToTop from "@/components/GoToTop";
import Navbar from "@/components/Navbar";

const Achievements = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:block md:block hidden">
        <GoToTop />
      </div>
      Achievements
    </div>
  );
};

export default Achievements;
