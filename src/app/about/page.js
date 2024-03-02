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

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-36 flex gap-5 mx-5">
        <div className="w-80 border rounded-xl text-center max-h-[730px]">
          <Image
            src="https://i.ibb.co/68LC2r3/hero-img.webp"
            width={400}
            height={400}
            alt="banner-img"
          />
          <div className="">
            <h1 className="text-center text-2xl font-semibold text-zinc-600 my-5">
              Abdullah AL Fahim
            </h1>
            <span className="text-center border mx-auto text-sm bg-gray-300 rounded-lg text-zinc-600 p-1">
              MERN Stack Developer
            </span>
            <hr className="my-5 mx-10 border-violet-500" />
            <div>
              <div className="text-start group pl-3 gap-3 flex items-center">
                <div className="border p-2 rounded-lg inline-block">
                  <CiMail
                    className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                    fontSize={"2rem"}
                  />
                </div>
                <div>
                  <span className="text-sm text-zinc-600 uppercase">
                    E-mail
                  </span>
                  <p className="text-zinc-600">abdullahalfahin183@gmail.com</p>
                </div>
              </div>
              <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                <div className="border p-2 rounded-lg inline-block">
                  <IoPhonePortraitOutline
                    className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                    fontSize={"2rem"}
                  />
                </div>
                <div>
                  <span className="text-sm text-zinc-600 uppercase">Phone</span>
                  <p className="text-zinc-600">+8801798500503</p>
                </div>
              </div>
              <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                <div className="border p-2 rounded-lg inline-block">
                  <CiLocationOn
                    className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                    fontSize={"2rem"}
                  />
                </div>
                <div>
                  <span className="text-sm text-zinc-600 uppercase">
                    Location
                  </span>
                  <p className="text-zinc-600">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="text-start group pl-3 gap-3 flex items-center pt-4">
                <div className="border p-2 rounded-lg inline-block">
                  <LiaBirthdayCakeSolid
                    className="text-violet-500 group-hover:scale-110 duration-300 transition-all ease-in-out"
                    fontSize={"2rem"}
                  />
                </div>
                <div>
                  <span className="text-sm text-zinc-600 uppercase">
                    Birthday
                  </span>
                  <p className="text-zinc-600">19 oct, 2006</p>
                </div>
              </div>
              <div className="text-zinc-600 justify-center flex items-center gap-6 py-7">
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
        </div>
        <div className="border flex-1 rounded-xl p-5">
          <p className="text-3xl font-semibold text-violet-500">Hello!!</p>
          <p className="text-zinc-600 py-4">
            I&apos;m Fahim from Narayanganj, Dhaka, Bangladesh.I develop website
            with MongoDB, Express, React, NodeJS.Self-driven, focused, and
            dedicated Software Developer with 2+ years of experience, including
            1+ years of industrial experience. I am passionate about
            programming, developing new products, and exploring new
            technologies. Well-versed in modern web technologies and version
            control systems. Slow-paced learner, a good team player, and
            committed to achieving the goal. Determined to deliver quality with
            an emphasis on excellence.
          </p>
          <h1 className="tracking-wide text-3xl font-semibold text-zinc-600 flex items-center gap-3 pt-10">
            <SiSololearn /> LEARNING
          </h1>
          <p className="text-zinc-600 py-4">
            On July 1, 2021, I started to learn Web Development. The course was
            offered by Programming Hero. It was a beginner-level course that
            started from zero to a junior-level standard. Within five months, I
            completed the course successfully and learned the basics of MERN
            Stack. I finished a few projects with this tech stack. Besides this,
            to the extent of this course, I completed a long-term (7 weeks) team
            project, where I learned and familiarized the office culture and
            working process. That&apos;s how my web development learning
            started. Still, I&apos;m learning and exploring web development.
          </p>
          <h1 className="tracking-wide text-3xl font-semibold text-zinc-600 flex items-center gap-3 pt-10">
            <FaCode /> SKILLS
          </h1>
          <p className="text-zinc-600 py-4">
            I&apos;m skilled in HTML5, CSS3, Bootstrap, JavaScript, ES6, React
            JS, React Router, Node JS, Express JS, MongoDB, and Firebase
            Authentication. I&apos;m also familiar with JWT, React Native,
            Redux, Stripe, Tailwind CSS, and Material UI. Besides these,
            I&apos;m used to a few tools, like - Git, VS Code, Figma, Jira,
            Vercel, Heroku, Netlify, and Chrome Dev Tool. Currently, I&apos;m
            working on Vue JS, Nuxt JS, Next JS, and necessary packages.
          </p>

          <h1 className="tracking-wide text-3xl font-semibold text-zinc-600 items-center pt-10 flex gap-3">
            <FaGraduationCap className="inline" />
            EXPERIENCE
          </h1>
          <div className="py-3 flex gap-3 items-start text-zinc-600">
            <FaCircleCheck fontSize={"1.5rem"} className="text-violet-500" />
            <div className="">
              <h1 className="text-xl font-semibold text-zinc-600">
                Web Developer
              </h1>
              <p className="text-sm font-semibold text-violet-500">
                2023 - present
              </p>
              <p className="text-sm">
                I have 8 months of experience as a MERN stack in web development
              </p>
            </div>
          </div>
          <h1 className="tracking-wide pt-12 text-3xl font-semibold text-zinc-600 items-center flex gap-3">
            <FaGraduationCap className="inline" />
            EDUCATION
          </h1>
          <ol className="relative left-4 border-s border-violet-500 dark:border-gray-700 mt-5">
            <li className="mb-7 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 border-2 border-violet-500 overflow-hidden bg-gray-50">
                <FaCircle className="text-violet-500 animate-pulse text-sm" />
              </span>
              <div className="items-center justify-between pt-1">
                <div className="text-sm text-zinc-600 font-semibold">
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
              <span className="absolute flex items-center justify-center w-6 pb-[68px] rounded-full -start-3  overflow-hidden bg-gray-50">
                <FaCircleCheck
                  fontSize={"1.5rem"}
                  className="text-violet-500"
                />
              </span>
              <div className="items-center justify-between pt-1">
                <div className="text-sm text-zinc-600 font-semibold">
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
          <h1 className="tracking-wide pt-3 text-3xl font-semibold text-zinc-600 items-center flex gap-3">
            <GiStack className="inline" />
            Currently focused
          </h1>
          <div className="pl-10 pt-3">
            <div className="flex items-center gap-2 py-1">
              <TbTargetArrow fontSize={"2rem"} className="text-violet-500" />
              <h1 className="text-zinc-600 text-lg">
                learning new technologies
              </h1>
            </div>
            <div className="flex items-center gap-2 py-1">
              <TbTargetArrow fontSize={"2rem"} className="text-violet-500" />
              <h1 className="text-zinc-600 text-lg">Personal Branding</h1>
            </div>
            <div className="flex items-center gap-2 py-1">
              <TbTargetArrow fontSize={"2rem"} className="text-violet-500" />
              <h1 className="text-zinc-600 text-lg">Building unique Project</h1>
            </div>
          </div>
          <h1 className="tracking-wide pt-10 text-3xl font-semibold text-zinc-600 items-center flex gap-3">
            <IoMdHeart className="inline" />
            Love To Do
          </h1>
          <p className="text-zinc-600 py-5">
            I love programming, developing new products, and exploring new
            technologies. I play video games in my spare time. Sometimes I watch
            movies. Also, love to go somewhere with family or friends on
            vacation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
