import React from 'react';
import CarListingBanner from "@/element/car-listing-banner";
import CarOverview from "@/components/car/car-overview";
import {getBySlug, getListCar} from "@/shared/service/car/car.service";
import {ActionResault} from "@/shared/model/base/action-resault";
import {CarDto} from "@/shared/model/dto/car/car.dto";
import LatestCarSider from "@/components/car/latest-car-sider";
import Link from "next/link";
import {CarPropertyDto} from "@/shared/model/dto/car/car-property.dto";

interface PageProps {
    params: { slug: string };
}

const Page = async ({params}: PageProps) => {
    if (!params.slug) {
        return <div>آدرس وارد شده معتبر نیست.</div>;
    }
    const res: ActionResault<CarDto> = await getBySlug(params.slug);
    const car = res.data;
    let carList: CarDto[] = (await getListCar()).data || [];
    if (carList.length > 0) {
        carList = carList.filter((item) => item.id !== car.id);
    }


    if (!car) {
        return <div>خودرو پیدا نشد!</div>;
    }
    return (
        <div className="page-content bg-white">
            <title>{car.title}</title>
            <CarListingBanner img={car.image?.[0].toString()} title={car.title}/>
            <CarOverview car={car}/>
            <div className="container mb-5">
                <h2 className="title mb-2">محصولات دیگر</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="row col-12 lightgallery">
                            {carList.slice(0, 3).map((item, index) => (
                                <div
                                    key={index}
                                    className="car-list-box col-sm-6 col-lg-4 my-2 overlay"
                                >
                                    <div className="media-box">
                                        <div className="image-wrapper">
                                            <img
                                                src={item.image[0]}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
