import { FaFacebook, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <hr className="my-10 dark:border-neutral-600" />
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-around gap-5 text-zinc-600">
        <div className="w-[300px] dark:text-zinc-300">
          <h2 className="text-2xl font-semibold pb-1">PORTFOLIO</h2>
          <p>
            I&apos;m a software developer based in Bangladesh, specializing in
            cutting-edge web and mobile technologies as well as pixel-perfect
            designs.
          </p>
        </div>
        <div className="dark:text-zinc-300">
          <p className="text-3xl font-semibold dark:text-zinc-300">Pages</p>
          <ul className="dark:text-zinc-300">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Article</li>
          </ul>
        </div>
        <div className="dark:text-zinc-300">
          <p className="text-3xl pb-11 font-semibold">Social Media Links</p>
          <div className="text-zinc-600 flex items-center gap-6 pt-5 dark:text-zinc-500">
            <span>
              <MdOutlineMailOutline
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </span>
            <span>
              <FaGithubAlt
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </span>
            <span>
              <FaLinkedinIn
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </span>
            <span>
              <FaFacebook
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </span>
          </div>
        </div>
      </div>
      <hr className="my-10 dark:border-neutral-600" />
      <p className="text-center text-zinc-500 pb-5">
        ALL RIGHTS RESERVED @2024 BY FAHIM
      </p>
    </div>
  );
};

export default Footer;
