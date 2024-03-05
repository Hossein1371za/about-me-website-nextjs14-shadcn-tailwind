import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// component
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-right">
            <div className="text-sm font-semibold text-primary mb-4">
              توسعه دهنده وب
            </div>
            <h1 className="h1 mb-4">
              سلام من حسین زحمتکشان هستم{" "}
              <span className="text-3xl">&#128512;</span>
            </h1>
            <p className="subtitle mx-w-[490px] mx-auto xl:mx-0">
              طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
              که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار
              فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از
              روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح
              به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی
              جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row  gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  <Send size={18} />
                  ارتباط با من
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                <Download size={18} />
                دانلود
              </Button>
            </div>
            <Socials
              containerStyle="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyle="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
            containerStyles="absolute top-[24%] -right-[8rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="تعداد سال تجربه"
            />
            <Badge
            containerStyles="absolute top-[70%] -right-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={80}
              badgeText="تعداد پروژه ها "
            />
            <Badge
            containerStyles="absolute top-[45%] -left-6"
              icon={<RiTeamFill />}
              endCountNum={30}
              badgeText="تعداد مشتری "
            />
            <div className="bg-hero_shape dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -left-2"></div>
            <DevImg
              containerStyles=" w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/me.jpg"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
