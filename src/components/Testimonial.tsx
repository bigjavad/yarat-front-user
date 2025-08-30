"use client"
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";


const testimonial = [
    {
        img: '/assets/images/testimonials/pic2.jpg',
        name: "مهدی حسینی",
        desc: "با یارات موتور تجربه رانندگی در کویر برام فراموش‌نشدنی شد. باگی‌ها فوق‌العاده مقاوم و قدرتمند هستند و خدمات پس از فروش هم همیشه همراه ما بود."
    },
    {
        img: '/assets/images/testimonials/pic1.jpg',
        name: "سارا غلامی",
        desc: "طراحی اختصاصی و کیفیت ساخت باگی‌ها واقعاً منو شگفت‌زده کرد. حس می‌کنم هر مسیر سختی رو می‌تونم با یارات تجربه کنم."
    },
    {
        img: '/assets/images/testimonials/pic3.jpg',
        name: "امیر رضا نادری",
        desc: "پشتیبانی تیم یارات موتور بی‌نظیر بود. از مراحل سفارش تا تحویل، همه چیز سریع و بدون مشکل انجام شد."
    },
    {
        img: '/assets/images/testimonials/pic2.jpg',
        name: "نرگس عباسی",
        desc: "تست و بررسی‌های دقیق قبل از تحویل باعث شد اعتمادم به کیفیت محصول بیشتر بشه. واقعاً ارزش خرید داشت."
    },
    {
        img: '/assets/images/testimonials/pic1.jpg',
        name: "علیرضا کریمی",
        desc: "باگی‌های یارات مخصوص مسیرهای آفرود طراحی شده‌اند و هر بار رانندگی باهاشون یک ماجراجویی جدیده."
    },
    {
        img: '/assets/images/testimonials/pic3.jpg',
        name: "مهسا رضوی",
        desc: "طراحی زیبا و بدنه مقاوم باگی‌ها باعث شد همه دوستام عاشقش بشن. خرید از یارات موتور یک تجربه حرفه‌ای بود."
    },
];
const Testimonial = () => {
    const swiperRef = React.useRef(null)
    return (
        <>

            <div className="section-content" style={{overflow: 'hidden'}}>
                <Swiper className="testimonial-one swiper-container"
                        slidesPerView={3}
                        spaceBetween={30}
                        speed={1200}
                        ref={swiperRef}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            300: {
                                slidesPerView: 1,
                            },
                        }}
                >
                    {testimonial.map((monials, index) => {
                        return (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <div className="testimonial-1 wow fadeInUp" data-wow-duration="2s"
                                     data-wow-delay="0.2s">
                                    <div className="testimonial-text">
                                        <p>
                                            {monials.desc}
                                        </p>
                                    </div>
                                    <div className="testimonial-detail clearfix">
                                        <div className="testimonial-pic quote-left radius shadow">
                                            <img src={monials.img} width="100" height="100" alt=""/></div>
                                        <strong className="testimonial-name">{monials.name}</strong></div>
                                </div>
                            </SwiperSlide>)
                    })}
                    <div className="testimonial-pagination text-center m-t50">
                        <div className="btn-prev swiper-button-prev7 cursorPointer" onClick={() => {
                            // @ts-ignore
                            swiperRef.current.swiper.slidePrev()
                        }}><FaCaretRight/></div>
                        <div className="btn-next swiper-button-next7 cursorPointer" onClick={() => {
                            // @ts-ignore
                            swiperRef.current.swiper.slideNext()
                        }}><FaCaretLeft/></div>
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default Testimonial
