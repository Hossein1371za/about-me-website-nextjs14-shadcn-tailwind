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
      { company: "شرکت 1", role: "برنامه نویس", years: "1400 " },
      { company: "شرکت 2", role: "برنامه نویس", years: "1401 " },
      { company: "شرکت 3", role: "برنامه نویس", years: "1402 " },
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
                    <h3 className="h3 mb-8 text-center xl:text-right">
                      مسیر تحصیلات من
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* تجربیات */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium">
                            {getData(qualificationData, "تجربیات").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "تجربیات").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative mr-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -right-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* تحصیلات */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium">
                            {getData(qualificationData, "تحصیلات").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "تحصیلات").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative mr-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -right-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-right">
                    <h3 className="mb-8 h3">
                      من در چه بخشهایی مهارت کسب میکنم؟
                    </h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">مهارت ها</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "مهارت ها").data.map(
                          (item, index) => {
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{item.name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* ابزار ها */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-right">
                        ابزارها
                      </h4>
                      <div className="border-b border-b-border mb-8"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "ابزار").data.map((item, index) => {
                          return (
                            <div key={index}>
                              <Image
                                src={item.imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
