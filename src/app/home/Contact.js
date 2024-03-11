import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="mx-5">
      <SectionTitle title={"Contact me"} />
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
        <form className="flex items-center flex-col gap-5">
          <input
            type="text"
            placeholder="Jhon Doe"
            className="border border-violet-500 outline-none pl-5 rounded-lg py-3 bg-white dark:bg-black dark:text-zinc-300 lg:w-[400px] md:w-[400px] w-[300px]"
            required
          />
          <input
            type="email"
            placeholder="Example@gmail.com"
            className="border border-violet-500 outline-none pl-5 rounded-lg py-3 bg-white dark:bg-black dark:text-zinc-300 lg:w-[400px] md:w-[400px] w-[300px]"
            required
          />
          <textarea
            placeholder="What's on your mind?"
            className="border border-violet-500 outline-none pl-5 rounded-lg py-3 bg-white dark:bg-black dark:text-zinc-300 resize-none lg:w-auto md:w-auto w-[310px]"
            rows={7}
            required
            cols={50}
          />
          <button className="bg-violet-600 text-white py-2 px-5 rounded-lg">
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
