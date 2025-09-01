"use client"
import React, {useEffect, useState} from 'react'
import Link from "next/link";
import {ActionResault} from "@/shared/model/base/action-resault";
import {CarDto} from "@/shared/model/dto/car/car.dto";
import {getListCar} from "@/shared/service/car/car.service";
import {CarPropertyDto} from "@/shared/model/dto/car/car-property.dto";

function LatestCarSider() {
    const [carList, setCarList] = useState<CarDto[]>([]);

    useEffect(() => {
        getListCar().then((res: ActionResault<CarDto[]>) => {
            setCarList(res.data);
        })
    }, []);

    return (
        <>
            <div className="row lightgallery gap-3">
                {carList.map((item, index) => {
                    return ( <div key={index} className="car-list-box col-lg-4 overlay">
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
                                <span className="badge px-3 py-2 m-b5 fs-6">
                                    {item.price} تومان
                                </span>
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
                                                <span key={idx}>{facility.title}{idx < Math.min(item.facilitiesList.length, 3) - 1 ? ' , ' : ''}</span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default LatestCarSider
