"use client";
import ProjectsC from "@/components/home/ProjectsC";
import SectionTitle from "@/components/home/SectionTitle";
import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedProject = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    axios.get("/project.json").then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="mx-5">
      <SectionTitle title={"Prime Wokrs"} />

      <div className="flex items-center justify-center">
        <div className="">
          {loading && data.length <= 0 ? (
            <p>loading...</p>
          ) : (
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
              {data?.slice(0, 2).map((item) => (
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
