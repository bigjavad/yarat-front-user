import React from 'react'
import HomeBanner from '../components/home/home-banner'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import CarFeatures from "@/components/car/car-features";
import CarStory from "@/components/car/car-story";
import ContectUs from "@/components/contect-us/contect-us";
import About from "@/components/about/about";
import CarHomeList from "@/components/home/car-home-list";
import HomeModalVideo from "@/components/home/home-modal-video";


export default function Home() {


    return (
        <>
            <div className="page-content bg-white">
                <div className="banner-one">
                    <div className="row">
                        <HomeBanner/>
                    </div>

                </div>
                <section className="content-inner-2 overflow-hidden">
                    <div className="container">
                        <About/>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <CarFeatures/>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container-fluid">
                        <div className="section-head space-lg text-center">
                            <h2 className="title">محصولات یارات</h2>
                            <p>
                                لیست کامل محصولات یارات را مشاهده کنید. هر محصول با جزئیات و
                                ویژگی‌های اختصاصی خود نمایش داده می‌شود تا انتخاب برای شما راحت‌تر شود.
                                کیفیت، تنوع و کاربردی بودن محصولات یارات ما را از دیگران متمایز می‌کند.
                            </p>
                        </div>
                        <CarHomeList/>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row features-box">
                            <CarStory/>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <ContectUs/>
                    </div>
                </section>
            </div>
            <HomeModalVideo />
        </>
    )
}
