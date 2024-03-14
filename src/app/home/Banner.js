"use client";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { useState } from "react";

const font = Roboto_Mono({
  weight: "700",
  style: ["normal"],
  subsets: ["cyrillic-ext"],
  display: "swap",
});

const Banner = () => {
  const [clicked, setClicked] = useState(false);
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=abdullahalfahin183@gmail.com&su=Subject&body=Body`;

  const handleDownload = () => {
    setClicked(true);
    const pdf = document.createElement("a");
    pdf.href =
      "https://drive.google.com/uc?export=download&id=1uNWa3KSMHK-jc2AGnZxg0hw1W9iBXXSx";
    pdf.download = "resume.pdf";
    document.body.appendChild(pdf);
    pdf.click();
    document.body.removeChild(pdf);
    setClicked(false);
  };

  return (
    <>
      <div className="flex lg:gap-0 md:gap-0 gap-10 lg:flex-row md:flex-row flex-col lg:py-10 md:py-5 justify-center items-center mx-5 ">
        <div>
          <div className="lg:pt-32 md:pt-32 pt-5 flex flex-col justify-center leading-5">
            <span className="lg:text-2xl md:text-2xl texl-xl leading-3 font-semibold text-zinc-700 tracking-wider dark:text-zinc-300">
              Hi! all I&apos;m
            </span>
            <br />
            <span className="lg:text-6xl md:text-5xl text-5xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 from-0% to-violet-900 to-100%">
              Fahim
            </span>
            <br />
            <span
              className={`lg:text-4xl md:text-3xl text-3xl lg:leading-3 md:leading-3 font-semibold text-zinc-700 tracking-widest dark:text-zinc-300`}
            >
              <TypeAnimation
                sequence={[
                  `MERN Stack Developer`,
                  2000,
                  `FrontEnd Developer`,
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <p
            className={`pt-5 text-lg text-zinc-700 tracking-widest ${font.className} dark:text-zinc-300`}
          >
            I&apos;m a software developer based in Bangladesh, <br />
            specializing in cutting-edge web and mobile <br /> technologies as
            well as pixel-perfect designs.
          </p>
          <hr className="my-5 border-violet-500" />
          <div className="flex items-center gap-3">
            <a
              onClick={handleDownload}
              download="resume.pdf"
              className="bg-violet-500 text-white py-2 px-4 rounded-xl flex gap-2 items-center cursor-pointer"
            >
              <FaDownload />
              {clicked ? "Downloading..." : "Resume"}
            </a>
            <a
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1uNWa3KSMHK-jc2AGnZxg0hw1W9iBXXSx/view?usp=drive_link"
              target="_blank"
              className="border-violet-600 border text-violet-500 py-2 flex gap-2 items-center px-4 rounded-xl"
            >
              <FaEye />
              Resume
            </a>
          </div>
          <div className="text-zinc-600 flex items-center gap-6 pt-7 dark:text-zinc-500">
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
        <Image
          src="https://i.ibb.co/68LC2r3/hero-img.webp"
          width={500}
          height={500}
          loading="lazy"
          alt="banner-img"
        />
      </div>
    </>
  );
};

export default Banner;
