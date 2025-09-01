"use client"
import React from 'react'
import LatestCarBanner from "@/element/latest-car-banner";
import LatestCarSider from "@/components/car/latest-car-sider";
import ContectUs from "@/components/contect-us/contect-us";

const Page = () => {
    return (
        <>
            <title>یارات محصولات ما</title>
            <meta name="description" content="یارات پلتفرم تولید باگ‌های گروهی ۴، ۸ و ۱۲ نفره است."/>
            <div className="page-content bg-white">
                <LatestCarBanner img={'/assets/images/gallery/27.webp'} title={'محصولات ما'}/>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <LatestCarSider/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <ContectUs/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Page
