"use client";
import ProjectsC from "@/components/home/ProjectsC";
import SectionTitle from "@/components/home/SectionTitle";
import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsApi";

const FeaturedProject = () => {
  const { data: projects, isFetching } = useGetAllProjectsQuery(undefined);

  return (
    <div className="mx-5">
      <SectionTitle title={"Prime Wokrs"} />

      <div className="flex items-center justify-center">
        <div className="">
          {isFetching && projects?.data?.length <= 0 ? (
            <p>loading...</p>
          ) : (
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
              {projects?.data?.slice(0, 2).map((item) => (
                <ProjectsC
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  sub={item.sub}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
