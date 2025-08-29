'use client'
import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import Link from "next/link";


const aboutSlider = [
    {
        icon: '...',
        title: 'تولیدکننده',
        desc: 'یارات موتور سازنده دستگاه های باگی، طراحی و تولید اختصاصی برای کویر و مسیرهای سخت، بدون واسطه و با کیفیت تضمین‌شده.'
    },
    {
        icon: '...',
        title: 'تکنولوژی',
        desc: 'ما همیشه با آخرین تکنولوژی‌های آفرود جلو می‌ریم. از سیستم تعلیق بهبود یافته تا ارتقاهای دوره‌ای، باگی شما همیشه به‌روز و آماده ماجراجویی می‌مونه.'
    },
    {
        icon: '...',
        title: 'ایمنی',
        desc: 'ایمنی برای ما شوخی نیست. شاسی مقاوم، بدنه محکم و تست‌های میدانی روی شن و خاک، تضمین می‌کنن که هر سفر پرهیجان هم امن باشه.'
    },
]


const AboutSlider = () => {
    return (<Swiper className="swiper-container about-swiper"
                    slidesPerView={3}
                    speed={1200}
                    breakpoints={{
                        1280: {
                            slidesPerView: 3,
                        }, 768: {
                            slidesPerView: 2,
                        }, 320: {
                            slidesPerView: 1,
                        },
                    }}
    >
        {aboutSlider.map((item, index) => (<SwiperSlide className="swiper-slide" key={index}>
            <div className="icon-bx-wraper style-1 hover-overlay-effect">
                {/*<div className="icon-md m-b40">*/}
                {/*    <svg width="47" height="42" viewBox="0 0 47 42" fill="none"*/}
                {/*         xmlns="http://www.w3.org/2000/svg">*/}
                {/*        <path d={item.icon} fill="#0D3DE6"/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
                <div className="icon-content">
                    <h3 className="title text-center text-white"><Link href="/services" id='about-title'
                                                                       className="text-effect-1">{item.title}</Link>
                    </h3>
                    <p className="">
                        {item.desc}
                    </p>
                </div>
                <div className="effect bg-primary"></div>
            </div>
        </SwiperSlide>))}
    </Swiper>)
}

export default AboutSlider
