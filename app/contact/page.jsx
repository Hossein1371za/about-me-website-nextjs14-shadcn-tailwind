import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              سلاممممم 👋
            </div>
            <h1 className="h1 max-w-md mb-8">بیا با هم شروع کنیم.</h1>
            <p className="subtitle max-w-[400px]">
              طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
              که محتوای اصلی صفحات آماده نیست.
            </p>
          </div>
        <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
