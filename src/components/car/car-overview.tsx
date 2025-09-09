"use client"
import React, {useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, FreeMode, Thumbs} from "swiper/modules";
import {jalaliPipe} from "@/shared/pipe/jalali-pipe";
import {CarDto} from "@/shared/model/dto/car/car.dto";
import {CarPropertyDto} from "@/shared/model/dto/car/car-property.dto";
import {saveOrders} from "@/shared/service/orders/orders.service";
import {OrdersDto} from "@/shared/model/dto/orders/orders.dto";
import {store} from "@/shared/redux/store";
import ContactModal from "@/components/contact-modal/contact-modal";
import {snackbarService} from "@/shared/service-ui/snackbar.service";
import {ActionResault} from "@/shared/model/base/action-resault";
import ContectUs from "@/components/contect-us/contect-us";
import Link from "next/link";


const carOverview = (data: { car: CarDto }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [addActive, setActive] = useState('nav_one');
    const user = store.getState().globalReducer.user;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navLinks = (e) => {
        setActive(e.currentTarget.id);
    }

    function onSubmit() {
        setIsModalOpen(true);
    }

    function fillModel(): OrdersDto {
        let model: OrdersDto = new OrdersDto();
        model.carId = data.car.id;
        return model;
    }

    return (
        <>
            <section className="content-inner-2">
                <div className="container">

                    <div className="row">
                        <div className=" col-xl-8 col-lg-7 col-md-6 m-b0 m-md-b50">
                            <div className="product-gallery on-show-slider lightgallery m-b40" id="lightgallery">
                                <Swiper className="swiper-container sync1"
                                        spaceBetween={10}
                                        speed={1200}
                                        thumbs={{swiper: thumbsSwiper}}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                >
                                    {data.car.image?.map((slide, index) => {
                                        return (
                                            <SwiperSlide className="swiper-slide" key={index}>
                                                <div className="dlab-thum-bx">
                                                    <img className="w-100 h-100" src={slide} alt={data.car.title}/>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                                <nav aria-label="breadcrumb" className="mt-5 fs-6">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href={`/car-listing`}>محصولات</Link></li>
                                        <li className="breadcrumb-item"><Link href={`/car/${data.car.slug}`}>{data.car.title}</Link></li>
                                    </ol>
                                </nav>
                                <h6>گالری محصول</h6>
                                <Swiper className="swiper-container thumb-slider sync2"
                                        onClick={setThumbsSwiper}
                                        spaceBetween={30}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        breakpoints={{
                                            420: {
                                                slidesPerView: 4,
                                            },
                                            300: {
                                                slidesPerView: 3,
                                            },
                                            240: {
                                                slidesPerView: 2,
                                            },
                                        }}

                                >
                                    {data.car.image?.map((item, ind) => {
                                        return (
                                            <SwiperSlide id="thumbsSlides" className="swiper-slide slidethumbs "
                                                         key={ind}>
                                                <div className="dlab-media">
                                                    <img className='cursorPointer' src={item} alt=""/>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            <div className="dlab-info">
                                <div className="dlab-meta">
                                    <ul>
                                        <li className="post-date"><i
                                            className="las la-calendar"></i>{jalaliPipe.toJalali(data.car.createdDate)}
                                        </li>
                                        <li className="post-author"><i className="las la-user"></i> ظرفیت
                                            : {data.car.capacity} نفر
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-b50">
                                <div className="dlab-post-title">
                                    <h3 className="post-title">{data.car.title}</h3>
                                    <h6 className="sub-title"></h6>
                                </div>
                                <blockquote className="block-quote style-1">
                                    <p>{data.car.description}</p>
                                </blockquote>
                                <div className="mt-5">
                                    <h6>توضیحات تکمیلی</h6>
                                    <div className="mt-2" dangerouslySetInnerHTML={{__html: data.car.body || ''}}/>
                                </div>
                                <div className="mt-5">
                                    <h6>امکانات</h6>
                                    <p className="value font-14">
                                        {data.car.facilitiesList?.map((facility: CarPropertyDto, idx: number) => (
                                            <span key={idx}>{facility.title} ,</span>
                                        ))}
                                    </p></div>
                            </div>
                            <div className="product-description">
                                <ul className="nav nav-tabs style-1 m-b20">
                                    <li>
                                        <div id='nav_one' onClick={navLinks}
                                             className={`nav-link cursorPointer ${addActive === 'nav_one' ? 'active' : ''}`}>موتور
                                        </div>
                                    </li>
                                    <li>
                                        <div id='nav_two' onClick={navLinks}
                                             className={`nav-link cursorPointer ${addActive === 'nav_two' ? 'active' : ''}`}>سیستم
                                            تعلیق
                                        </div>
                                    </li>
                                    <li>
                                        <div id='nav_three' onClick={navLinks}
                                             className={`nav-link cursorPointer ${addActive === 'nav_three' ? 'active' : ''}`}>تایر
                                            ها و چرخ ها
                                        </div>
                                    </li>
                                    <li>
                                        <div id='nav_four' onClick={navLinks}
                                             className={`nav-link cursorPointer ${addActive === 'nav_four' ? 'active' : ''}`}>سیستم
                                            ترمز
                                        </div>
                                    </li>
                                    <li>
                                        <div id='nav_five' onClick={navLinks}
                                             className={`nav-link cursorPointer ${addActive === 'nav_five' ? 'active' : ''}`}>ابعاد
                                            و
                                            ظرفیت
                                        </div>
                                    </li>
                                    <li>
                                        <div id='nav_six' onClick={navLinks}
                                             className={`nav-link cursorPointer ${addActive === 'nav_six' ? 'active' : ''}`}>ویژگی
                                            ها
                                        </div>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <div id='nav_seven' onClick={navLinks}*/}
                                    {/*         className={`nav-link cursorPointer ${addActive === 'nav_seven' ? 'active' : ''}`}>گارانتی*/}
                                    {/*        ها*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                </ul>
                                <div className="tab-content">
                                    <div id="specifications"
                                         className={`tab-pane ${addActive === 'nav_one' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                {
                                                    data.car && data.car.engine.map((item, key: number) => {
                                                        return <li key={key}>
                                                            <div className="leftview">{item.title}</div>
                                                            <div className="rightview">{item.content}</div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="presentation"
                                         className={`tab-pane ${addActive === 'nav_two' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                {
                                                    data.car.suspensions && data.car.suspensions.map((item, key: number) => {
                                                        return <li key={key}>
                                                            <div className="leftview">{item.title}</div>
                                                            <div className="rightview">{item.content}</div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="features"
                                         className={`tab-pane ${addActive === 'nav_three' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                {
                                                    data.car.tire && data.car.tire.map((item, key: number) => {
                                                        return <li key={key}>
                                                            <div className="leftview">{item.title}</div>
                                                            <div className="rightview">{item.content}</div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="safety" className={`tab-pane ${addActive === 'nav_four' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                {
                                                    data.car.break && data.car.break.map((item, key: number) => {
                                                        return <li key={key}>
                                                            <div className="leftview">{item.title}</div>
                                                            <div className="rightview">{item.content}</div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="dimensionsCapacity"
                                         className={`tab-pane ${addActive === 'nav_five' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                {
                                                    data.car.dimensionsCapacity && data.car.dimensionsCapacity.map((item, key: number) => {
                                                        return <li key={key}>
                                                            <div className="leftview">{item.title}</div>
                                                            <div className="rightview">{item.content}</div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="expert" className={`tab-pane ${addActive === 'nav_six' ? 'active' : ''}`}>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">
                                            <ul className="table-dl clearfix">
                                                {
                                                    data.car.expert && data.car.expert.map((item, key: number) => {
                                                        return <li key={key}>
                                                            <div className="leftview">{item.title}</div>
                                                            <div className="rightview">{item.content}</div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {/*<div id="warranty"*/}
                                    {/*     className={`tab-pane ${addActive === 'nav_seven' ? 'active' : ''}`}>*/}
                                    {/*    <div className="icon-bx-wraper bx-style-1 p-a30 p-sm-a0">*/}
                                    {/*        <ul className="table-dl clearfix">*/}
                                    {/*            {*/}
                                    {/*                data.car.warranty && data.car.warranty.map((item, key: number) => {*/}
                                    {/*                    return <li key={key}>*/}
                                    {/*                        <div className="leftview">{item.title}</div>*/}
                                    {/*                        <div className="rightview">{item.content}</div>*/}
                                    {/*                    </li>*/}
                                    {/*                })*/}
                                    {/*            }*/}
                                    {/*        </ul>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4  col-lg-5 col-md-6">
                            <div className="sticky-md-top nav-tabs-top">
                                <div className="car-dl-info icon-bx-wraper style-1 m-b50">
                                    <div className="price m-b30">
                                        <span className="text-secondary font-14"> برای اطلاع از اطلاعات تکمیلی ثبت سفارش ثبت کنید کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.</span>
                                    </div>
                                    <form>
                                        <div className="clearfix">
                                            <button onClick={() => onSubmit()} type="button"
                                                    className="btn-primary w-100 justify-content-center btn btn-block">ثبت
                                                سفارش
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-inner">
                <div className="container">
                    <ContectUs/>
                </div>
            </section>
            {isModalOpen && (
                <ContactModal
                    isModal={true}
                    carId={data.car.id}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    )
}

export default carOverview
