"use client";
import React, { useState } from "react";
import { projectData } from "@/components/Work";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

const uniqueCategory = [
  "همه پروژه ها",
  ...new Set(projectData.map((item) => item.category)),
];
const Projects = () => {
  const [category, setCategory] = useState("همه پروژه ها");
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          پروژه های من
        </h2>
        <Tabs defaultValue={category}>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {uniqueCategory.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
