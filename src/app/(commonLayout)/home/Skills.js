"use client";
import SectionTitle from "@/components/home/SectionTitle";
import SkillCard from "@/components/home/SkillCard";
import { useGetAllSkillsQuery } from "@/redux/features/skills/skillApi";

const Skills = () => {
  const { data: skills, isFetching } = useGetAllSkillsQuery(undefined);

  return (
    <div className="mx-5">
      <SectionTitle title={"skills"} />
      <div className="flex justify-center items-center py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-5">
          {skills?.data?.map((item) => (
            <div key={item.id}>
              <SkillCard loading={isFetching} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
