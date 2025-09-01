"use client"
import React, {useEffect, useState} from 'react';
import {ActionResault} from "@/shared/model/base/action-resault";
import {CarDto} from "@/shared/model/dto/car/car.dto";
import {getListCar} from "@/shared/service/car/car.service";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from "next/link";
import {CarPropertyDto} from "@/shared/model/dto/car/car-property.dto";

function TopDeal() {
    const [carList, setCarList] = useState<CarDto[]>([]);

    useEffect(() => {
        getListCar().then((res: ActionResault<CarDto[]>) => {
            setCarList(res.data);
        })
    }, []);

    return (
        <>
            <Swiper
                className="swiper-container deal-swiper swiper-dots-1"
                modules={[Pagination, Autoplay]}
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
                {carList.map((item: CarDto, index: number) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                        <div className="car-list-box overlay">
                            <div className="media-box">
                                <div className="image-wrapper">
                                    <img
                                        src={item.image[0]?.toString()}
                                        alt={item.title}
                                        className="w-full object-cover img-main"
                                    />
                                    <img
                                        src={item.image[1]?.toString()}
                                        alt={item.title}
                                        className="w-full object-cover img-hover"
                                    />
                                </div>
                            </div>
                            <div className="list-info">
                                <h3 className="title">
                                    <Link
                                        href={`/car/${item.slug}`}
                                        data-splitting
                                        className="text-white"
                                    >
                                        {item.title}
                                    </Link>
                                </h3>
                                <div className="feature-list">
                                    <div>
                                        <label>ظرفیت</label>
                                        <p className="value font-10">{item.capacity} نفر</p>
                                    </div>
                                    <div>
                                        <label>گارانتی</label>
                                        <p className="value font-10">
                                            {item.warranty?.[0]?.content || '' +
                                                ''}
                                        </p>
                                    </div>
                                    <div>
                                        <label>امکانات</label>
                                        <p className="value font-10">
                                            {item.facilitiesList?.slice(0, 3).map((facility: CarPropertyDto, idx: number) => (
                                                <span key={idx}>{facility.content}{idx < Math.min(item.facilitiesList.length, 3) - 1 ? ' , ' : ''}</span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default TopDeal;
