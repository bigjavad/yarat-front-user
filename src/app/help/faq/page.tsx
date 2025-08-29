"use client"
import React, {useState} from 'react';
import CarListingBanner from "@/element/car-listing-banner";
import {IMAGE} from "@/constent/theme";
import ContectForm from "@/element/ContectForm";
import {Accordion, Badge, Col, Container, Row} from "react-bootstrap";
import {Metadata} from "next";
import Head from "next/head";

function Page() {
    const [activeKey, setActiveKey] = useState('0');

    const faqCategories = [
        {
            title: "سوالات متداول",
            icon: "👤",
            items: [
                {
                    question: "چگونه می‌توانم یک خودروی باگی خریداری کنم؟",
                    answer: "برای خرید، کافی است به صفحه محصولات مراجعه کنید، خودروی مورد نظر را انتخاب و فرم سفارش را پر کنید. تیم فروش با شما تماس گرفته و فرآیند خرید را تکمیل می‌کند."
                },
                {
                    question: "آیا امکان بازدید حضوری از محصولات وجود دارد؟",
                    answer: "بله، شما می‌توانید با هماهنگی قبلی به محل نمایشگاه یارات موتورز مراجعه کرده و خودروها و قطعات را از نزدیک مشاهده کنید."
                },
                {
                    question: "چگونه می‌توانم قطعات یدکی سفارش دهم؟",
                    answer: "در بخش قطعات، محصول مورد نیاز خود را انتخاب کرده و فرم سفارش را تکمیل نمایید. تیم ما در کوتاه‌ترین زمان با شما تماس خواهد گرفت."
                },
                {
                    question: "روش‌های پرداخت چگونه است؟",
                    answer: "پرداخت‌ها به صورت حضوری، کارت به کارت یا انتقال بانکی انجام می‌شود. پس از تکمیل سفارش، اطلاعات دقیق پرداخت به شما اعلام خواهد شد."
                },
                {
                    question: "مدت زمان تحویل محصولات چقدر است؟",
                    answer: "زمان تحویل بستگی به نوع محصول و موجودی آن دارد. پس از ثبت سفارش، تیم فروش زمان تقریبی تحویل را اطلاع‌رسانی می‌کند."
                },
                {
                    question: "آیا محصولات یارات موتورز گارانتی دارند؟",
                    answer: "بله، تمامی محصولات دارای گارانتی معتبر هستند. شرایط گارانتی هنگام خرید به مشتری ارائه می‌شود."
                },
                {
                    question: "چگونه می‌توانم از خدمات پس از فروش استفاده کنم؟",
                    answer: "برای خدمات پس از فروش، می‌توانید با شماره‌های پشتیبانی یا بخش تماس با ما ارتباط برقرار کنید تا راهنمایی لازم ارائه شود."
                },
                {
                    question: "آیا یارات موتورز مشاوره خرید هم ارائه می‌دهد؟",
                    answer: "بله، کارشناسان ما آماده هستند تا شما را در انتخاب بهترین خودرو یا قطعه بر اساس نیازتان راهنمایی کنند."
                },
                {
                    question: "آیا امکان سفارش محصولات اختصاصی یا سفارشی وجود دارد؟",
                    answer: "بله، در صورت تمایل به سفارش ویژه یا تغییرات خاص، می‌توانید با تیم فروش تماس گرفته و جزئیات را هماهنگ کنید."
                },
                {
                    question: "چگونه می‌توانم با یارات موتورز تماس بگیرم؟",
                    answer: "برای ارتباط با ما، می‌توانید از شماره‌های اعلام‌شده، فرم تماس در وبسایت یا شبکه‌های اجتماعی یارات موتورز استفاده کنید."
                }


            ]
        },

    ];
    return (
        <div>
            <Head>
                <title>یارات سوالات متداول</title>
                <meta name="description" content="یارات پلتفرم تولید باگ‌های گروهی ۴، ۸ و ۱۲ نفره است."/>
            </Head>
            <div className="page-content bg-white">
                <CarListingBanner img={'/assets/images/gallery/23.webp'} title={'سوالات متداول'}/>

                <section className="content-inner overflow-hidden bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-head style-1">
                                    <div className="row display-align">
                                        <div className="col-lg-6 m-b0 m-lg-b20">
                                            <div className="title-sm text-uppercase">120+ مدل خودرو و برند</div>
                                            <h2 className="h2">
                                                مزایای <span className="font-weight-800">یارات موتورز</span>
                                            </h2>
                                        </div>
                                        <div className="col-lg-6">
                                            <p className="m-b0">
                                                ما به جزئیات اهمیت می‌دهیم و به همین دلیل خدمات فروش و مشاوره خودروهای
                                                یارات موتورز با کیفیت بالا و تجربه‌ای مطمئن ارائه می‌شوند.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Box 1 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="icon-bx-wraper style-4 box-hover text-center m-b30">
                                    <div className="icon-lg m-b20 text-primary">
                                        <a href="#" className="icon-cell">
                                            {/* SVG Icon */}
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-tilte m-b20 text-capitalize">پشتیبانی ۲۴/۷</h4>
                                        <p>تیم ما در هر زمان آماده پاسخگویی به سوالات شماست.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Box 2 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="icon-bx-wraper style-4 text-center box-hover m-b30">
                                    <div className="icon-lg m-b20 text-primary">
                                        <a href="#" className="icon-cell">
                                            {/* SVG Icon */}
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-tilte m-b20 text-capitalize">رزرو آسان خودرو</h4>
                                        <p>می‌توانید هر زمان که خواستید خودروی مورد نظر خود را رزرو کنید.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Box 3 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="icon-bx-wraper style-4 text-center box-hover m-b30">
                                    <div className="icon-lg m-b20 text-primary">
                                        <a href="#" className="icon-cell">
                                            {/* SVG Icon */}
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-tilte m-b20 text-capitalize">مکان‌های تحویل متعدد</h4>
                                        <p>بیش از ۲۵۰ نقطه در سراسر کشور برای تحویل خودرو در دسترس است.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Box 4 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="icon-bx-wraper style-4 text-center box-hover m-b30">
                                    <div className="icon-lg m-b20 text-primary">
                                        <a href="#" className="icon-cell">
                                            {/* SVG Icon */}
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-tilte m-b20 text-capitalize">گارانتی محصولات</h4>
                                        <p>تمام خودروها و قطعات دارای گارانتی معتبر هستند.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Box 5 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="icon-bx-wraper style-4 text-center box-hover m-b30">
                                    <div className="icon-lg m-b20 text-primary">
                                        <a href="#" className="icon-cell">
                                            {/* SVG Icon */}
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-tilte m-b20 text-capitalize">مشاوره تخصصی خرید</h4>
                                        <p>کارشناسان ما شما را در انتخاب بهترین خودرو و قطعات راهنمایی می‌کنند.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Box 6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="icon-bx-wraper style-4 text-center box-hover m-b30">
                                    <div className="icon-lg m-b20 text-primary">
                                        <a href="#" className="icon-cell">
                                            {/* SVG Icon */}
                                        </a>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dlab-tilte m-b20 text-capitalize">تحویل سریع سفارش‌ها</h4>
                                        <p>پس از ثبت سفارش، خودرو یا قطعات در کمترین زمان به شما تحویل داده می‌شوند.</p>
                                    </div>
                                </div>
                            </div>

                            {/* ادامه باکس‌ها مشابه بالا */}
                        </div>
                    </div>
                </section>


                <Container className="py-4">

                    {faqCategories.map((category, categoryIndex) => (
                        <Row key={categoryIndex} className="mb-4">
                            <Col lg={10} className="mx-auto">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="fs-5 me-2">{category.icon}</span>
                                    <h2 className="h5 fw-semibold text-primary mb-0">{category.title}</h2>
                                </div>

                                <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key || '0')} flush>
                                    {category.items.map((item, itemIndex) => {
                                        const eventKey = `${categoryIndex}-${itemIndex}`;
                                        return (
                                            <Accordion.Item key={eventKey} eventKey={eventKey}
                                                            className="border-0 mb-2">
                                                <Accordion.Header className="p-3 rounded-1 ">
                                                    <span className="fw-medium text-dark">{item.question}</span>
                                                </Accordion.Header>
                                                <Accordion.Body className="p-3 text-primary lh-lg">
                                                    {item.answer}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        );
                                    })}
                                </Accordion>
                            </Col>
                        </Row>
                    ))}
                </Container>

            </div>
        </div>
    );
}

export default Page;
