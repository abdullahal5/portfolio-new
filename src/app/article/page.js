import GoToTop from "@/components/GoToTop";
import Navbar from "@/components/Navbar";

const Article = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:block md:block hidden">
        <GoToTop />
      </div>
      article
    </div>
  );
};

export default Article;
