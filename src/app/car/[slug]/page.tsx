import React from 'react';
import CarListingBanner from "@/element/car-listing-banner";
import CarOverview from "@/components/car/car-overview";
import { getBySlug } from "@/shared/service/car/car.service";
import { ActionResault } from "@/shared/model/base/action-resault";
import { CarDto } from "@/shared/model/dto/car/car.dto";

interface PageProps {
    params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
    if (!params.slug) {
        return <div>آدرس وارد شده معتبر نیست.</div>;
    }
    const res: ActionResault<CarDto> = await getBySlug(params.slug);
    const car = res.data;
    if (!car) {
        return <div>خودرو پیدا نشد!</div>;
    }
    return (
        <div className="page-content bg-white">
            <title>{car.title}</title>
            <CarListingBanner img={car.image?.[0].toString()} title={car.title} />
            <CarOverview car={car} />
        </div>
    );
}

export default Page;
