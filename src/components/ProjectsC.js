import Link from "next/link";

const ProjectsC = ({ title, image, sub }) => {
  return (
    <Link href={`/projects/${title}`}>
      <div
        className={`border lg:w-[500px] md:w-[500px] w-[300px] lg:h-[300px] md:h-[300] h-52 duration-300 transform hover:scale-105 rounded-lg relative dark:border-neutral-800 cursor-pointer bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gradient-to-b from-white from-[0%] via-neutral-800 via-[65%] to-neutral-900 to-[100%] h-full opacity-60 rounded-lg">
          <div className="flex items-end justify-start">
            <div className="absolute bottom-5 left-5">
              <h1 className="text-[45px] font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-lg font-bold bg-gradient-to-r from-white from-[100%] to-white to-[100%] bg-clip-text text-transparent">
                {sub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsC;
