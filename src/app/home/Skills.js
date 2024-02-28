"use client";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const fetchData = async () => {
    axios.get("/skill.json").then((res) => setSkills(res.data));
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <div className="mx-5">
      <SectionTitle title={"skills"} />
      <div className="flex justify-center items-center py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-5">
          {skills?.map((item) => (
            <SkillCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
