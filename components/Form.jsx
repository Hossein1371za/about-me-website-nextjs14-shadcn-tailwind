"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowLeftIcon,MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="نام ....." />
        <User size={20} className="absolute left-6" />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="ایمیل ....." />
        <MailIcon size={20} className="absolute left-6" />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="توضیحات ....." />
        <MessageSquare size={20} className="absolute left-6 top-4" />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">ارسال نظر
      <ArrowLeftIcon size={20}/>
      </Button>
    </form>
  );
};

export default Form;
