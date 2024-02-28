import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const FeaturedProject = () => {
  return (
    <div className="mx-5">
      <SectionTitle title={"Prime Wokrs"} />
      <div className="flex items-center justify-center py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="w-[300px] group h-[290px] rounded-xl bg-white border overflow-hidden cursor-pointer">
            <div className="h-[70%] rounded-xl relative">
              <Image
                src="https://i.ibb.co/F3XYkx6/0e8b3f11ed875882a688bcf581f22842.jpg"
                className="object-cover h-[98%] group-hover:rounded-xl rounded-xl group-hover:scale-105 transition-all duration-300 ease-in-out absolute inset-0 group-hover:bg-black "
                width={500}
                height={100}
                alt="feature image"
              />
              <div className="absolute inset-0 rounded-xl group-hover:bg-black duration-300 ease-in-out transition-all opacity-40"></div>
            </div>
            <div className="pl-3 pt-3">
              <h1 className="text-xl font-semibold">Resume</h1>
              <p className="text-zinc-500">Web development</p>
            </div>
          </div>
          <div className="w-[300px] group h-[290px] rounded-xl bg-white border overflow-hidden cursor-pointer">
            <div className="h-[70%] rounded-xl relative">
              <Image
                src="https://i.ibb.co/F3XYkx6/0e8b3f11ed875882a688bcf581f22842.jpg"
                className="object-cover h-[98%] group-hover:rounded-xl rounded-xl group-hover:scale-105 transition-all duration-300 ease-in-out absolute inset-0 group-hover:bg-black "
                width={500}
                height={100}
                alt="feature image"
              />
              <div className="absolute inset-0 rounded-xl group-hover:bg-black duration-300 ease-in-out transition-all opacity-40"></div>
            </div>
            <div className="pl-3 pt-3">
              <h1 className="text-xl font-semibold">Resume</h1>
              <p className="text-zinc-500">Web development</p>
            </div>
          </div>
          <div className="w-[300px] group h-[290px] rounded-xl bg-white border overflow-hidden cursor-pointer">
            <div className="h-[70%] rounded-xl relative">
              <Image
                src="https://i.ibb.co/F3XYkx6/0e8b3f11ed875882a688bcf581f22842.jpg"
                className="object-cover h-[98%] group-hover:rounded-xl rounded-xl group-hover:scale-105 transition-all duration-300 ease-in-out absolute inset-0 group-hover:bg-black "
                width={500}
                height={100}
                alt="feature image"
              />
              <div className="absolute inset-0 rounded-xl group-hover:bg-black duration-300 ease-in-out transition-all opacity-40"></div>
            </div>
            <div className="pl-3 pt-3">
              <h1 className="text-xl font-semibold">Resume</h1>
              <p className="text-zinc-500">Web development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
