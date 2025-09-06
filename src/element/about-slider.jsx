'use client'
import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'


const aboutSlider = [
    {
        icon: '...',
        title: 'تولیدکننده',
        desc: 'یارات موتورز سازنده دستگاه های باگی، طراحی و تولید اختصاصی برای کویر و مسیرهای سخت، بدون واسطه و با کیفیت تضمین‌شده.'
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
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            {
                isClient ?<Swiper className="swiper-container about-swiper"
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
                    {aboutSlider.map((item, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                            <div className="icon-bx-wraper style-1 hover-overlay-effect d-flex flex-column h-100 min-vh-40">
                                <div className="icon-content d-flex flex-column flex-grow-1">
                                    <h3 className="title text-center text-white">
                                        {
                                            item && <span className="text-effect-1">{item?.title}</span>
                                        }
                                    </h3>
                                    <p className="flex-grow-1">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="effect bg-primary"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>:<div></div>
            }
        </>
        )
}

export default AboutSlider
