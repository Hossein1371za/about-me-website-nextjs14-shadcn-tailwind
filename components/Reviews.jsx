"use client";
import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "اصغر فرهادی",
    job: "کارگردان",
    review:
      "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "اصغر فرهادی",
    job: "کارگردان",
    review:
      "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "اصغر فرهادی",
    job: "کارگردان",
    review:
      "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "اصغر فرهادی",
    job: "کارگردان",
    review:
      "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "اصغر فرهادی",
    job: "کارگردان",
    review:
      "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "اصغر فرهادی",
    job: "کارگردان",
    review:
      "طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center">مرورها</h2>
        <Swiper
          slidesPerview={1}
          breakpoints={{
            640: { slidesPerview: 2 },
            1400: { slidesPerview: 3 },
          }}
          spaceBetween={30}
          modules={[pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return <SwiperSlide key={index}>
                <Card>

                </Card>
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
