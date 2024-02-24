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
  return <div>About</div>;
};

export default About;
