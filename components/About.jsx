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
  Briefcase,
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
console.log(getData(qualificationData,"تحصیلات").title)
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          درباره من
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/me.jpg"
            />
          </div>
          <div className="flex-1">
            <Tabs>
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" valu="personal">
                  اطلاعات شخصی
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  تحصیلات
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  مهارت ها
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent valu="peronal">
                  <div className="text-center xl:text-right ">
                    <h3 className="h3 mb-4">درحال آموزش به مدت یک سالو نیم</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      من در حال آموزش ساخت وب سایت های پویا با تکنولوژی های
                      پیشرفته هستم و تا کنون چندین قالب وب سایت طراحی کرده ام.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">زبان های خارجی</div>
                      <div className="border-b border-border"></div>
                      <div>انگلیسی, فارسی, آلمانی</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-right">مسیر تحصیلات من</h3>
                    <div>
                      <div>
                        <div>
                          <Briefcase/>
                          <div>
                            {getData(qualificationData,"تجربیات").title}
                          </div>
                        </div>
                      </div>
                      <div>education</div>
                    </div>
                  </div>
                </TabsContent>
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
