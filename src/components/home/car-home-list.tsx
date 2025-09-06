import React from "react";
import { ActionResault } from "@/shared/model/base/action-resault";
import { CarDto } from "@/shared/model/dto/car/car.dto";
import { getListCar } from "@/shared/service/car/car.service";
import CarHomeListSwiper from "@/components/home/car-home-list-swiper";

const CarHomeList = async () => {
    const res: ActionResault<CarDto[]> = await getListCar();
    const carList = res.data;
    return <CarHomeListSwiper carList={carList}/>;
};

export default CarHomeList;
