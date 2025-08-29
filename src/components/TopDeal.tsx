'use client'
import React from 'react'
import {IMAGE} from '@/constent/theme'
import {Swiper, SwiperSlide} from 'swiper/react'

import Link from "next/link";
import {Autoplay, Pagination} from "swiper/modules";

let topdealSlid = [
    {title: "باگی دو نفره", capacity: 2, image: [
            '/assets/images/gallery/1.webp',
            '/assets/images/gallery/2.webp'
        ], id: 1, description: "توضیحات"},
    {title:"باگی چهار نفره",capacity:4,image:[IMAGE.dealPic2],id:2,description:"توضیحات"},
    {title:"باگی هشت نفره",capacity:8,image:[
            '/assets/images/gallery/80.webp',
            '/assets/images/gallery/81.webp'
        ],id:3,description:"توضیحات"},
    {title:"باگی دوازده نفره",capacity:12,image:[
            '/assets/images/gallery/90.webp',
            '/assets/images/gallery/91.webp'
        ],id:4,description:"توضیحات"},
]
const TopDeal = () => {
    const paginationRef = React.useRef(null)
    return (

        <>
            <Swiper className="swiper-container deal-swiper swiper-dots-1"
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000
                    }}
                    slidesPerView={4}
                    spaceBetween={30}
                    speed={1200}
                    breakpoints={{
                        1500: {
                            slidesPerView: 4,
                        },
                        1400: {
                            slidesPerView: 3,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        240: {
                            slidesPerView: 1,
                        },
                    }}
            >
                {

                    topdealSlid.map((item, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                            <div className="car-list-box overlay">
                                <div className="media-box">
                                    <img src={item.image[0]} alt=""/>
                                </div>
                                <div className="list-info">
                                    <h3 className="title"><Link href="/car-details" data-splitting
                                                                className="text-white">{item.title}</Link></h3>
                                    <span className="badge px-3 py-2 m-b5 fs-6">$34,500</span>
                                    <div className="feature-list">
                                        <div>
                                            <label>ظرفیت</label>
                                            <p className="value font-10">{item.capacity} نفر </p>
                                        </div>
                                        <div>
                                            <label>گارانتی</label>
                                            <p className="value font-10">6 ماه موتوری</p>
                                        </div>
                                        <div>
                                            <label>امکانات</label>
                                            <p className="value font-10">
                                                فرمان اسپرت و ...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                <div className="slider-one-pagination m-t40 m-sm-t20">
                    <div className="swiper-pagination" ref={paginationRef}></div>
                </div>
            </Swiper>
        </>
    )
}

export default TopDeal
