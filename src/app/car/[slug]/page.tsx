"use client"
import React, {useEffect, useState} from 'react'
import CarListingBanner from "@/element/car-listing-banner";
import CarOverview from "@/components/car/car-overview";
import {getBySlug} from "@/shared/service/car/car.service";
import {ActionResault} from "@/shared/model/base/action-resault";
import {CarDto} from "@/shared/model/dto/car/car.dto";
import {useParams} from "next/navigation";

const Page = () => {
    const [car, setCar] = useState<CarDto | null>(null);
    const params = useParams();

    useEffect(() => {
        if (!params.slug) return;
        getBySlug(params.slug.toString()).then((res: ActionResault<CarDto>) => {
            setCar(res.data);
        });
    }, [params.slug]);

    return (
        <div className="page-content bg-white">
            <title>{car?.title}</title>
            <CarListingBanner img={car?.image?.[0].toString()} title={car?.title}/>
            {
                car && <CarOverview car={car}/>
            }
        </div>
    )
}

export default Page
