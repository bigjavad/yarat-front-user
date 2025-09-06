import React from 'react';
import Link from 'next/link';
import { ActionResault } from '@/shared/model/base/action-resault';
import { CarDto } from '@/shared/model/dto/car/car.dto';
import { getListCar } from '@/shared/service/car/car.service';
import { CarPropertyDto } from '@/shared/model/dto/car/car-property.dto';

export default async function LatestCarSider() {
    const res: ActionResault<CarDto[]> = await getListCar();
    const carList = res.data;

    return (
        <div className="row col-12 lightgallery">
            {carList.map((item, index) => (
                <div
                    key={index}
                    className="car-list-box col-sm-6 col-lg-3 my-2 col-xxl-4 overlay"
                >
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
                                <label>امکانات</label>
                                <p className="value font-10">
                                    {item.facilitiesList
                                        ?.slice(0, 1)
                                        .map((facility: CarPropertyDto, idx: number) => (
                                            <span key={idx}>
                        {facility.title}
                                                {idx < Math.min(item.facilitiesList.length, 1) - 1
                                                    ? ' , '
                                                    : ''}
                      </span>
                                        ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
