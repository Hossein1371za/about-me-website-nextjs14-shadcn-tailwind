import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 pt-8 xl:h-[480px] mb-6 xl:mb-14">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              سلاممممم 👋
            </div>
            <h1 className="h1 max-w-md mb-8">بیا با هم شروع کنیم.</h1>
            <p className="subtitle max-w-[400px]">
              طراحان هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
              که محتوای اصلی صفحات آماده نیست.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>Youremail@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>تهران ..........</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>091211111111</div>
            </div>
          </div>
          <form></form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
