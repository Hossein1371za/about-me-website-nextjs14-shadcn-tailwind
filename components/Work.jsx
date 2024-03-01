"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "وب سایت اول",
    description:
      "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "وب سایت دوم",
    description:
      "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "وب سایت سوم",
    description:"طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "وب سایت چهارم",
    description:"طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "وب سایت پنجم",
    description:"طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "وب سایت ششم",
    description:"طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "وب سایت هفتم",
    description:"طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "وب سایت هشتم",
    description:"طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "وب سایت نهم",
    description:"طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-right mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">جدیدترین پروژه ها</h2>
          <p className="subtitle mb-8">
            طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
          </p>
          <Link href="./project">
            <Button>همه</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:ml-4 xl:absolute left-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
