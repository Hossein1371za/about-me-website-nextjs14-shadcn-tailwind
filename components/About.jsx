import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  BrifeCase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "حسین زحمتکشان" },
  { icon: <PhoneCall size={20} />, text: "0911111111" },
  { icon: <MailIcon size={20} />, text: "youremail@gmail.com" },
  { icon: <Calendar size={20} />, text: "متولد 3/3/1371 " },
  { icon: <GraduationCap size={20} />, text: "توسعه دهنده وب" },
  { icon: <HomeIcon size={20} />, text: "تهران..." },
];

const qualificationData = [
  {
    title: "تحصیلات",
    data: [
      { university: "دانشگاه 1 ", qualification: "لیسانس", years: "1390" },
      { university: "دانشگاه 2", qualification: "لیسانس", years: "1394" },
      { university: "دانشگاه 3", qualification: "لیسانس", years: "1398" },
    ],
  },
  {
    title: "تجربیات",
    data: [
      { company: "شرکت 1", qualification: "برنامه نویس", years: "1400 " },
      { company: "شرکت 2", qualification: "برنامه نویس", years: "1401 " },
      { company: "شرکت 3", qualification: "برنامه نویس", years: "1402 " },
    ],
  },
];

const skillData = [
  {
    title: "مهارت ها",
    data: [
      {
        name: "HTML,CSS",
      },
      {
        name: "BootStrap,Tailwind,Sass",
      },

      {
        name: "JavaScript,Reactjs,Nextjs",
      },
      {
        name: "Git,Github",
      },
      {
        name: "Front-end Development",
      },
    ],
  },
  {
    title: "ابزار",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">درباره من</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/hero/me.jpg"/>
          </div>
          <div className="flex-1">
            <Tabs defaultValue="peronal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger valu="personal">اطلاعات شخصی</TabsTrigger>
                <TabsTrigger value="qualification">تحصیلات</TabsTrigger>
                <TabsTrigger value="skills">مهارت ها</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">اطلاعات شخصی</TabsContent>
                <TabsContent value="qualification">تحصیات</TabsContent>
                <TabsContent value="skills">مهارت ها</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
