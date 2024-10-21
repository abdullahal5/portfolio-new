"use client";
import SectionTitle from "@/components/home/SectionTitle";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { PiSpinnerBold } from "react-icons/pi";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_2gabbmo", "template_kxip6gc", form.current, {
        publicKey: "IXst6eLIBbYF_WpCt",
      })
      .then(
        (data) => {
          if (data.text === "OK" && data.status === 200) {
            toast.success("Your email has been sent");
            form.current.reset();
            setLoading(false);
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="mx-5">
      <SectionTitle title={"Contact me"} />
      <div>
        <Toaster />
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-10">
        <div>
          <Image
            src={
              "https://i.ibb.co/4K0mPDQ/undraw-Mailbox-re-dvds-removebg-preview.png"
            }
            width={500}
            loading="lazy"
            height={500}
            alt="image"
          />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex items-center flex-col gap-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Jhon Doe"
            className="border border-violet-500 outline-none pl-5 rounded-lg py-3 bg-white dark:bg-black dark:text-zinc-300 lg:w-[400px] md:w-[400px] w-[300px]"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Example@gmail.com"
            className="border border-violet-500 outline-none pl-5 rounded-lg py-3 bg-white dark:bg-black dark:text-zinc-300 lg:w-[400px] md:w-[400px] w-[300px]"
            required
          />
          <textarea
            placeholder="What's on your mind?"
            className="border border-violet-500 outline-none pl-5 rounded-lg py-3 bg-white dark:bg-black dark:text-zinc-300 resize-none lg:w-auto md:w-auto w-[310px]"
            rows={7}
            name="message"
            required
            cols={50}
          />
          <button
            type="submit"
            value="Send"
            disabled={loading ? true : false}
            className="bg-violet-600 text-white py-2 px-5 rounded-lg flex items-center gap-2"
          >
            {loading ? <PiSpinnerBold className="animate-spin inline" /> : ""}{" "}
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
