"use client"
import React, {useState} from 'react'
import HomeBanner from '../components/home/home-banner'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video'
import CarFeatures from "@/components/car/car-features";
import TopDeal from "@/components/home/top-deal";
import BestCar from "@/components/car/best-car";
import ContectUs from "@/components/contect-us/contect-us";
import About from "@/components/about/about";
import CarListingBanner from "@/element/car-listing-banner";
import ContactModal from "@/components/contact-modal/contact-modal";



export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <>
                <title>یارات پلتفرم تولید باگی</title>
                <meta name="description" content="یارات پلتفرم تولید باگ‌های گروهی ۴، ۸ و ۱۲ نفره است." />
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
                        <TopDeal/>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row features-box">
                            <BestCar/>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <ContectUs/>
                    </div>
                </section>
                <div className="page-content bg-white">
                    <section className="content-inner bg-gray bottom-shape">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 m-b40">
                                    <div className="section-head">
                                        <div className="icon-full">
                                            <svg width="64" height="70" viewBox="0 0 64 70" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M24 28.4375C24 26.0217 22.2087 24.0625 20 24.0625H18C13.5813 24.0625 10 27.9795 10 32.8125V39.375C10 44.208 13.5813 48.125 18 48.125H20C22.2087 48.125 24 46.1658 24 43.75V28.4375ZM46 48.125C50.4188 48.125 54 44.208 54 39.375V32.8125C54 27.9795 50.4188 24.0625 46 24.0625H44C41.7912 24.0625 40 26.0217 40 28.4375V43.75C40 46.1658 41.7912 48.125 44 48.125H46ZM32 0C14.1475 0 0.5725 16.2463 0 35V37.1875C0 38.3961 0.895 39.375 2 39.375H4C5.105 39.375 6 38.3961 6 37.1875V35C6 19.3197 17.6637 6.5625 32 6.5625C46.3363 6.5625 58 19.3197 58 35H57.985C57.995 35.3322 58 57.657 58 57.657C58 60.8494 55.6338 63.4375 52.715 63.4375H40C40 59.8131 37.3138 56.875 34 56.875H30C26.6863 56.875 24 59.8131 24 63.4375C24 67.0619 26.6863 70 30 70H52.715C58.9475 70 64 64.4738 64 57.657V35C63.4275 16.2463 49.8525 0 32 0Z"
                                                    fill="white"/>
                                            </svg>
                                        </div>
                                        <h2 className="title">تماس</h2>
                                    </div>
                                    <p className="m-b50">
                                        یارات موتورز، نامی نوظهور و پویا در صنعت خودروسازی ایران، با تمرکز بر طراحی و تولید
                                        خودروهای باگی آفرود، به دنبال خلق تجربه‌ای متفاوت برای علاقه‌مندان به رانندگی
                                        ماجراجویانه است. ما در یارات موتورز با بهره‌گیری از دانش فنی بومی، فناوری‌های نوین و
                                        طراحی‌های خلاقانه، محصولاتی ایمن، قدرتمند و متناسب با نیازهای مشتریان ایرانی و
                                        منطقه‌ای ارائه می‌دهیم.

                                    </p>
                                </div>
                                <ContactModal isModal={false} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ModalVideo channel="youtube" autoplay
                        isOpen={open} videoId="PkkV1vLHUvQ" onClose={() => setOpen(false)}/>
        </>
    )
}
