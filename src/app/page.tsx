"use client"
import React, {useState} from 'react'
import Homebanner from '../components/home/Homebanner'
import About from '../components/about/About'
import CarFeatures from '../components/car/CarFeatures'
import TopDeal from '../components/TopDeal'
import Bestcar from '../components/car/Bestcar'
import ContectUs from '../components/contect-us/ContectUs'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video'


export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="page-content bg-white">
                <div className="banner-one">
                    <div className="row">
                        <Homebanner/>
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
                        <TopDeal/>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row features-box">
                            <Bestcar/>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <ContectUs/>
                    </div>
                </section>
            </div>
            <ModalVideo channel="youtube" autoplay
                        isOpen={open} videoId="PkkV1vLHUvQ" onClose={() => setOpen(false)}/>
        </>
    )
}
