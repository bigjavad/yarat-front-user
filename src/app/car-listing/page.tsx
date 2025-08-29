"use client"
import React from 'react'
import LatestCarBanner from "@/element/LatestCarBanner";
import LatestCarSider from "@/components/car/LatestCarSider";
import PopulerCars from "@/components/car/PopulerCars";
import ContectUs from "@/components/contect-us/ContectUs";

const LetestCar = () => {
  return (
    <>
      <div className="page-content bg-white">
        <LatestCarBanner title={'محصولات ما'} />
        <section className="content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-7">
                <LatestCarSider />
              </div>
              <PopulerCars categery={'پر بازدید ترین ها'} />
            </div>
          </div>
        </section >
        <section className="content-inner">
          <div className="container">
            <ContectUs />
          </div>
        </section>
      </div>
    </>
  )
}

export default LetestCar
