"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaCircleCheck, FaGraduationCap, FaCode } from "react-icons/fa6";
import { GiStack } from "react-icons/gi";
import { SiSololearn } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdHeart } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import GoToTop from "@/components/GoToTop";
import { BsDiscord } from "react-icons/bs";
import Footer from "@/components/Footer";
import { BsStars } from "react-icons/bs";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=abdullahalfahin183@gmail.com&su=Subject&body=Body`;

  return (
    <div>
      <Navbar />
      <div className="lg:block md:block hidden">
        <GoToTop />
      </div>
      <div className="lg:pt-36 md:pt-36 pt-5 flex lg:flex-row md:flex-row flex-col gap-5 mx-5">
        <div className="w-80 lg:block md:block hidden border rounded-xl text-center max-h-[730px] dark:border-neutral-800">
          <Image
            src="https://i.ibb.co/68LC2r3/hero-img.webp"
            width={400}
            height={400}
            loading="lazy"
            alt="banner-img"
          />
          <div className="">
            <h1 className="text-center text-2xl font-semibold text-zinc-600 my-5 dark:text-zinc-300">
              Abdullah AL Fahim
            </h1>
            <span className="text-center border mx-auto text-sm bg-gray-300 rounded-lg text-zinc-600 p-1 dark:bg-black dark:border-neutral-800 dark:text-zinc-300">
              MERN Stack Developer
            </span>
            <hr className="my-5 mx-10 border-violet-500" />
            <div>
              <div className="text-start group pl-3 gap-3 flex items-center">
                <div className="border dark:border-neutral-800 p-2 rounded-lg inline-block">
                  <CiMail
                    className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out "
                    fontSize={"2rem"}
                  />
                </div>
                <div>
                  <span className="text-sm text-zinc-600 uppercase dark:text-zinc-300">
                    E-mail
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    abdullahalfahin183@gmail.com
                  </p>
                </div>
              </div>
              <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                <div className="border dark:border-neutral-800 p-2 rounded-lg inline-block">
                  <IoPhonePortraitOutline
                    className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                    fontSize={"2rem"}
                  />
                </div>
                <div>
                  <span className="text-sm text-zinc-600 uppercase dark:text-zinc-300">
                    Phone
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    +8801798500503
                  </p>
                </div>
              </div>
              <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                <div className="border dark:border-neutral-800 p-2 rounded-lg inline-block">
                  <CiLocationOn
                    className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                    fontSize={"2rem"}
                  />
                </div>
                <div>
                  <span className="text-sm text-zinc-600 uppercase dark:text-zinc-300">
                    Location
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                <div className="border dark:border-neutral-800 p-2 rounded-lg inline-block">
                  <LiaBirthdayCakeSolid
                    className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                    fontSize={"2rem"}
                  />
                </div>
                <div>
                  <span className="text-sm text-zinc-600 uppercase dark:text-zinc-300">
                    Birthday
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    19 oct, 2006
                  </p>
                </div>
              </div>
              <div className="text-zinc-600 justify-center flex items-center gap-6 py-7 dark:text-zinc-500">
                <a target="_blank" rel="noopener noreferrer" href={mailtoLink}>
                  <MdOutlineMailOutline
                    fontSize={"1.7rem"}
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/abdullahal5"
                >
                  <FaGithubAlt
                    fontSize={"1.7rem"}
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/abdullah-al-fahim-7a5593286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <FaLinkedinIn
                    fontSize={"1.7rem"}
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/abdullahal.fahim.9421"
                >
                  <FaFacebook
                    fontSize={"1.7rem"}
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://discord.com/users/fahim4026"
                >
                  <BsDiscord
                    fontSize={"1.7rem"}
                    className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden md:hidden block border w-full rounded-xl dark:border-neutral-800 relative">
          <div
            onClick={() => setShowInfo(!showInfo)}
            className="absolute p-2 border-l border-b rounded-bl-xl right-0 dark:border-neutral-800"
          >
            {showInfo ? (
              <FaChevronDown className="text-violet-500" />
            ) : (
              <FaChevronUp className="text-violet-500" />
            )}
          </div>
          <div>
            <div className="flex items-center text-center py-3">
              <div className="w-[35%]">
                <Image
                  src="https://i.ibb.co/68LC2r3/hero-img.webp"
                  width={150}
                  height={150}
                  loading="lazy"
                  alt="banner-img"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-center text-xl font-semibold text-zinc-600 my-2 dark:text-zinc-300">
                  Abdullah AL Fahim
                </h1>
                <span className="text-center border mx-auto text-sm bg-gray-300 rounded-lg text-zinc-600 p-1 dark:bg-black dark:border-neutral-800 dark:text-zinc-300">
                  MERN Stack Developer
                </span>
              </div>
            </div>
            {showInfo ? (
              <div>
                <hr className="border-violet-500 mx-10 opacity-30 mb-3" />
                <div className="text-start group pl-3 gap-3 flex items-center">
                  <div className="border dark:border-neutral-800 p-2 rounded-lg inline-block">
                    <CiMail
                      className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out "
                      fontSize={"2rem"}
                    />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-600 uppercase dark:text-zinc-300">
                      E-mail
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      abdullahalfahin183@gmail.com
                    </p>
                  </div>
                </div>
                <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                  <div className="border dark:border-neutral-800 p-2 rounded-lg inline-block">
                    <IoPhonePortraitOutline
                      className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                      fontSize={"2rem"}
                    />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-600 uppercase dark:text-zinc-300">
                      Phone
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      +8801798500503
                    </p>
                  </div>
                </div>
                <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                  <div className="border dark:border-neutral-800 p-2 rounded-lg inline-block">
                    <CiLocationOn
                      className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                      fontSize={"2rem"}
                    />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-600 uppercase dark:text-zinc-300">
                      Location
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                  <div className="border dark:border-neutral-800 p-2 rounded-lg inline-block">
                    <LiaBirthdayCakeSolid
                      className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                      fontSize={"2rem"}
                    />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-600 uppercase dark:text-zinc-300">
                      Birthday
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      19 oct, 2006
                    </p>
                  </div>
                </div>
                <div className="text-zinc-600 justify-center flex items-center gap-6 py-7 dark:text-zinc-500">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={mailtoLink}
                  >
                    <MdOutlineMailOutline
                      fontSize={"1.7rem"}
                      className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/abdullahal5"
                  >
                    <FaGithubAlt
                      fontSize={"1.7rem"}
                      className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/abdullah-al-fahim-7a5593286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    <FaLinkedinIn
                      fontSize={"1.7rem"}
                      className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                    />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/abdullahal.fahim.9421"
                  >
                    <FaFacebook
                      fontSize={"1.7rem"}
                      className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                    />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://discord.com/users/fahim4026"
                  >
                    <BsDiscord
                      fontSize={"1.7rem"}
                      className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
                    />
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="border flex-1 rounded-xl p-5 dark:border-neutral-800">
          <p className="text-3xl font-semibold text-violet-500">Hello!!</p>
          <p className="text-zinc-600 py-4 dark:text-zinc-300">
            I&apos;m Fahim from Narayanganj, Dhaka, Bangladesh.I develop website
            with MongoDB, Express, React, NodeJS. Self-driven, focused with 8
            months of experience. I am passionate about programming, developing
            new products, and exploring new technologies. Well-versed in modern
            web technologies and version control systems. Slow-paced learner, a
            good team player, and committed to achieving the goal. Determined to
            deliver quality with an emphasis on excellence.
          </p>
          <h1 className="tracking-wide text-3xl font-semibold text-zinc-600 flex items-center gap-3 pt-10 dark:text-zinc-300">
            <SiSololearn /> LEARNING
          </h1>
          <p className="text-zinc-600 py-4 dark:text-zinc-300">
            Starting in July 2021, my journey into web development commenced
            with Programming Hero&apos;s beginner-level course. Over five
            months, I immersed myself in learning the intricacies of the MERN
            Stack, completing numerous projects along the way. A pivotal
            experience came in the form of a seven-week team project, where I
            not only expanded my technical skills but also gained insight into
            professional office dynamics and collaborative workflows. Although
            I&apos;ve completed the initial course, my thirst for knowledge in
            web development remains unquenched, driving me to continuously
            explore and learn more in this dynamic field.
          </p>
          <h1 className="tracking-wide text-3xl font-semibold text-zinc-600 flex items-center gap-3 pt-10 dark:text-zinc-300 ">
            <FaCode /> SKILLS
          </h1>
          <p className="text-zinc-600 py-4 dark:text-zinc-300">
            I&apos;m skilled in HTML5, CSS3, Bootstrap, JavaScript, ES6, React
            JS, React Router, Node JS, Express JS, MongoDB, and Firebase
            Authentication. I&apos;m also familiar with JWT, React Native,
            Redux, Stripe, Tailwind CSS, and Material UI. Besides these,
            I&apos;m used to a few tools, like - Git, VS Code, Figma, Jira,
            Vercel, Heroku, Netlify, and Chrome Dev Tool. Currently, I&apos;m
            working on Vue JS, Nuxt JS, Next JS, and necessary packages.
          </p>

          <h1 className="tracking-wide text-3xl font-semibold text-zinc-600 items-center pt-10 flex gap-3 dark:text-zinc-300">
            <BsStars className="inline" />
            EXPERIENCE
          </h1>
          <div className="py-3 flex gap-3 items-start text-zinc-600">
            <FaCircleCheck fontSize={"1.5rem"} className="text-violet-500" />
            <div className="">
              <h1 className="text-xl font-semibold dark:text-zinc-300 text-zinc-600">
                Web Developer
              </h1>
              <p className="text-sm font-semibold text-violet-500">
                2023 - present
              </p>
              <p className="text-sm dark:text-zinc-300">
                I have 8 months of experience as a MERN stack in web development
              </p>
            </div>
          </div>
          <h1 className="tracking-wide pt-12 text-3xl font-semibold text-zinc-600 items-center flex gap-3 dark:text-zinc-300">
            <FaGraduationCap className="inline" />
            EDUCATION
          </h1>
          <ol className="relative left-4 border-s border-violet-500 dark:border-gray-700 mt-5 ">
            <li className="mb-7 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 border-2 border-violet-500 overflow-hidden bg-gray-50">
                <FaCircle className="text-violet-500 animate-pulse text-sm" />
              </span>
              <div className="items-center justify-between pt-1">
                <div className="text-sm text-zinc-600 dark:text-zinc-300 font-semibold">
                  <h1>Munshiganj Polytechnic Institute</h1>
                  <p className="text-violet-400 py-1">2023-2027</p>
                  <p className="font-light">
                    Department of Computer Science and Technology (CST)
                  </p>
                  <p className="font-light">Mirkadim, Munshiganj</p>
                </div>
              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 lg:pb-[68px] md:[68px] pb-[120px] dark:bg-black rounded-full -start-3  overflow-hidden bg-gray-50">
                <FaCircleCheck
                  fontSize={"1.5rem"}
                  className="text-violet-500"
                />
              </span>
              <div className="items-center justify-between pt-1">
                <div className="text-sm text-zinc-600 dark:text-zinc-300 font-semibold">
                  <h1>Quazi Mohiuddin Model High School</h1>
                  <p className="text-violet-400 py-1">2021-2022</p>
                  <p className="font-light">
                    After primary education, I attended this school and
                    completed my secondary education.
                  </p>
                  <p className="font-light">Rupganj, Narayangaj</p>
                </div>
              </div>
            </li>
          </ol>
          <h1 className="tracking-wide pt-3 text-3xl font-semibold text-zinc-600 items-center flex gap-3 dark:text-zinc-300 ">
            <GiStack className="inline" />
            Currently focused
          </h1>
          <div className="pl-10 pt-3">
            <div className="flex items-center gap-2  py-1">
              <TbTargetArrow fontSize={"2rem"} className="text-violet-500" />
              <h1 className="text-zinc-600 dark:text-zinc-300 text-lg">
                learning new technologies
              </h1>
            </div>
            <div className="flex items-center gap-2 py-1">
              <TbTargetArrow fontSize={"2rem"} className="text-violet-500" />
              <h1 className="text-zinc-600 text-lg dark:text-zinc-300 ">
                Personal Branding
              </h1>
            </div>
            <div className="flex items-center gap-2 py-1">
              <TbTargetArrow fontSize={"2rem"} className="text-violet-500" />
              <h1 className="text-zinc-600 text-lg dark:text-zinc-300 ">
                Building unique Project
              </h1>
            </div>
          </div>
          <h1 className="tracking-wide pt-10 text-3xl font-semibold text-zinc-600 items-center flex gap-3 dark:text-zinc-300">
            <IoMdHeart className="inline" />
            Love To Do
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 py-5">
            I find immense joy in programming and the creative process of
            developing new products, always eager to explore the latest
            technologies. In my downtime, I indulge in playing video games and
            occasionally unwind with a movie. However, I equally cherish moments
            spent with family and friends, often embarking on vacations together
            to create lasting memories.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
