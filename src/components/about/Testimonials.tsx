"use client";

import Icon from "../ui/IconSprite";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonial = [
    {
        name: "Suraj",
        state: "Rajasthan",
        quote: "Before Refyne, I was stuck with high-interest loans just to get by before the end of the month. Now, I can access my salary anytime I need it. Refyne has truly been a lifesaver, bringing me peace of mind and financial freedom. Thank you, Refyne!",
        image: "/images/about/suraj.webp"
    },
    {
        name: "Anitha",
        state: "Delhi",
        quote: "Refyne really helped me pay my child's school fees on time by allowing me to withdraw a salary advance instantly.",
        image: "/images/about/suraj.webp"
    },
    {
        name: "Neha",
        state: "Surat",
        quote: "Refyne has transformed the way I handle my finances. I can access my payout whenever I need it, whether it's for any emergencies or everyday expenses. The fast and smooth experience and 24/7 availability have made managing my finances much simpler.",
        image: "/images/about/suraj.webp"
    },
    {
        name: "Rahul",
        state: "Mumbai",
        quote: "Before Refyne, I was stuck with high-interest loans just to get by before the end of the month. Now, I can access my salary anytime I need it. Refyne has truly been a lifesaver, bringing me peace of mind and financial freedom. Thank you, Refyne!",
        image: "/images/about/suraj.webp"
    },
    {
        name: "Rahul",
        state: "Mumbai",
        quote: "Before Refyne, I was stuck with high-interest loans just to get by before the end of the month. Now, I can access my salary anytime I need it. Refyne has truly been a lifesaver, bringing me peace of mind and financial freedom. Thank you, Refyne!",
        image: "/images/about/suraj.webp"
    },
    {
        name: "Rahul",
        state: "Mumbai",
        quote: "Before Refyne, I was stuck with high-interest loans just to get by before the end of the month. Now, I can access my salary anytime I need it. Refyne has truly been a lifesaver, bringing me peace of mind and financial freedom. Thank you, Refyne!",
        image: "/images/about/suraj.webp"
    }
]

export default function Testimonials() {
    return (
        <section className="bg-primary">
            <div className="flex flex-col gap-15 fp text-text-light max-container overflow-visible">
                {/* First Row */}
                <div className="flex justify-between items-end">
                    <h2 className="text-[50px] font-bold max-w-[50%] leading-tight">Trusted by Millions of Employees Across India</h2>
                    <div className="flex gap-6">
                        <Icon name='arrow-right-boxed' width={60} height={60} className="testimonial-prev -scale-x-100 text-text-light/50 cursor-pointer hover:text-text-light transition-colors" />
                        <Icon name='arrow-right-boxed' width={60} height={60} className="testimonial-next cursor-pointer text-text-light/50 hover:text-text-light transition-colors" />
                    </div>
                </div>
                {/* End of First Row */}

                <div className="w-full relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: '.testimonial-prev',
                            nextEl: '.testimonial-next',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}

                        slidesPerView={2}
                        spaceBetween={30}
                        loop={true}

                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                        }}

                        className="w-full h-[350px] [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-full "
                    >
                        {testimonial.map((item, index) => (
                            <SwiperSlide key={index} className="h-auto! grid place-content-end">
                                {({ isActive }) => (
                                    <div className={`w-full ${isActive ? 'h-full' : 'h-[80%]'} ${isActive ? '' : 'blur-xs'} bg-accent/20 flex flex-col gap-15 justify-between p-8 rounded-lg overflow-hidden transition-all duration-500 ease-in-out`}>
                                        <div className={`flex ${isActive ? 'gap-20' : 'gap-10'} items-start`}>
                                            <Image src={item.image} alt="" width={80} height={80} className={`shrink-0 aspect-square ${isActive ? 'w-[80px] h-[80px] opacity-100 ' : 'w-[60px] h-[60px] opacity-50'} transition-[width,height,opacity] duration-500 ease-in-out`} />
                                            <p className={`${isActive ? 'text-base' : 'text-sm'}`}>{item.quote}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>0{index + 1}/0{testimonial.length}</p>
                                            <div className="flex flex-col gap-1 text-right">
                                                <h5 className="text-[20px] md:text-[24px] font-medium">-{item.name}</h5>
                                                <div className="text-xs md:text-sm text-text-light/60">{item.state}</div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>
        </section>
    )
}