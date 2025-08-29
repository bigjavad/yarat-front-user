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
            title: "حساب کاربری",
            icon: "👤",
            items: [
                {
                    question: "چگونه حساب کاربری ایجاد کنم؟",
                    answer: "برای ایجاد حساب کاربری، روی دکمه 'ثبت نام' در صفحه اصلی کلیک کرده و اطلاعات خواسته شده شامل نام، ایمیل و رمز عبور را وارد نمایید. سپس از طریق لینک فعالسازی که به ایمیل شما ارسال می‌شود، حساب خود را فعال کنید."
                },
                {
                    question: "رمز عبورم را فراموش کرده‌ام، چه کار کنم؟",
                    answer: "در صفحه ورود، روی گزینه 'فراموشی رمز عبور' کلیک کنید. ایمیل خود را وارد نمایید تا لینک بازنشانی رمز عبور برای شما ارسال شود."
                },
                {
                    question: "چگونه اطلاعات حساب کاربری را ویرایش کنم؟",
                    answer: "پس از ورود به حساب کاربری، به بخش 'پروفایل من' مراجعه کرده و اطلاعات مورد نظر را ویرایش نمایید."
                }
            ]
        },
        {
            title: "خرید و پرداخت",
            icon: "💳",
            items: [
                {
                    question: "چه روش‌های پرداختی پشتیبانی می‌شوند؟",
                    answer: "ما پرداخت از طریق کارت‌های عضو شتاب، کیف پول‌های الکترونیکی و پرداخت در محل را پشتیبانی می‌کنیم."
                },
                {
                    question: "آیا اطلاعات پرداخت من امن است؟",
                    answer: "بله، تمامی پرداخت‌ها از طریق درگاه‌های بانکی معتبر و با استفاده از پروتکل SSL انجام می‌شوند."
                },
                {
                    question: "چگونه می‌توانم فاکتور خرید خود را دریافت کنم؟",
                    answer: "پس از تکمیل خرید، فاکتور به صورت خودکار به ایمیل شما ارسال می‌شود. همچنین می‌توانید از بخش 'سفارشات من' در پنل کاربری فاکتور را دانلود کنید."
                }
            ]
        },
        {
            title: "ارسال و تحویل",
            icon: "🚚",
            items: [
                {
                    question: "مدت زمان ارسال سفارش چقدر است؟",
                    answer: "سفارشات داخل تهران حداکثر طی 24 ساعت و سفارشات به سایر شهرها طی 2 تا 3 روز کاری ارسال می‌شوند."
                },
                {
                    question: "هزینه ارسال چقدر است؟",
                    answer: "برای خریدهای بالای 200 هزار تومان، ارسال رایگان است. در غیر این صورت، هزینه ارسال بر اساس مسافت و وزن محاسبه می‌شود."
                },
                {
                    question: "چگونه می‌توانم وضعیت سفارشم را پیگیری کنم؟",
                    answer: "شماره پیگیری سفارش پس از ارسال به شما پیامک می‌شود. همچنین می‌توانید از بخش 'پیگیری سفارش' در سایت استفاده کنید."
                }
            ]
        },
        {
            title: "بازگرداندن کالا",
            icon: "↩️",
            items: [
                {
                    question: "شرایط بازگرداندن کالا چیست؟",
                    answer: "کالاهای سالم تا 7 روز پس از تحویل قابلیت بازگشت دارند. کالا باید در بسته‌بندی اصلی و بدون کوچکترین آسیب باشد."
                },
                {
                    question: "فرایند بازگرداندن کالا چگونه است؟",
                    answer: "از بخش 'سفارشات من' درخواست بازگشت ثبت کنید. پس از تأیید، مأمور ما برای دریافت کالا مراجعه خواهد کرد."
                },
                {
                    question: "چقدر طول می‌کشد تا مبلغ بازگشت داده شود؟",
                    answer: "پس از دریافت و بررسی کالا، مبلغ طی 3 تا 5 روز کاری به حساب شما بازگردانده می‌شود."
                }
            ]
        }
    ];
    return (
        <div>
            <Head>
                <title>یارات سوالات متداول</title>
                <meta name="description" content="یارات پلتفرم تولید باگ‌های گروهی ۴، ۸ و ۱۲ نفره است." />
            </Head>
            <div className="page-content bg-white">
                <CarListingBanner img={IMAGE.bnr1} title={'سوالات متداول'} />

                <Container className="py-4">
                    <Row className="text-center mb-4">
                        <Col>
                            <p className="text-muted mb-3">
                                پاسخ پرسش‌های پرتکرار شما در اینجا آمده است
                            </p>
                            <Badge bg="light" text="dark" className="fw-normal">
                                به روزرسانی: ۱۴۰۲/۱۰/۲۰
                            </Badge>
                        </Col>
                    </Row>
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
                                            <Accordion.Item key={eventKey} eventKey={eventKey} className="border-0 mb-2">
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

                <section className="content-inner bg-gray bottom-shape">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 m-b40">
                                <div className="section-head">
                                    <div className="icon-full">
                                        <svg width="64" height="70" viewBox="0 0 64 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 28.4375C24 26.0217 22.2087 24.0625 20 24.0625H18C13.5813 24.0625 10 27.9795 10 32.8125V39.375C10 44.208 13.5813 48.125 18 48.125H20C22.2087 48.125 24 46.1658 24 43.75V28.4375ZM46 48.125C50.4188 48.125 54 44.208 54 39.375V32.8125C54 27.9795 50.4188 24.0625 46 24.0625H44C41.7912 24.0625 40 26.0217 40 28.4375V43.75C40 46.1658 41.7912 48.125 44 48.125H46ZM32 0C14.1475 0 0.5725 16.2463 0 35V37.1875C0 38.3961 0.895 39.375 2 39.375H4C5.105 39.375 6 38.3961 6 37.1875V35C6 19.3197 17.6637 6.5625 32 6.5625C46.3363 6.5625 58 19.3197 58 35H57.985C57.995 35.3322 58 57.657 58 57.657C58 60.8494 55.6338 63.4375 52.715 63.4375H40C40 59.8131 37.3138 56.875 34 56.875H30C26.6863 56.875 24 59.8131 24 63.4375C24 67.0619 26.6863 70 30 70H52.715C58.9475 70 64 64.4738 64 57.657V35C63.4275 16.2463 49.8525 0 32 0Z" fill="white" />
                                        </svg>
                                    </div>
                                    <h2 className="title">Let’s Talk</h2>
                                </div>
                                <p className="m-b50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                <div className="row">
                                    <div className="col-sm-6 m-b20">
                                        <div className="icon-bx-wraper style-2">
                                            <div className="icon-bx-sm radius">
                                                <span className="icon-cell">
                                                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.6675 23.3511H20.6854V1.97607C20.6854 1.35475 20.1578 0.851074 19.5068 0.851074H3.00684C2.35592 0.851074 1.82826 1.35475 1.82826 1.97607V23.3511H0.846122C0.520689 23.3511 0.256836 23.6029 0.256836 23.9136V24.8511H22.2568V23.9136C22.2568 23.6029 21.993 23.3511 21.6675 23.3511ZM6.54255 4.41357C6.54255 4.10293 6.8064 3.85107 7.13184 3.85107H9.09612C9.42155 3.85107 9.68541 4.10293 9.68541 4.41357V6.28857C9.68541 6.59922 9.42155 6.85107 9.09612 6.85107H7.13184C6.8064 6.85107 6.54255 6.59922 6.54255 6.28857V4.41357ZM6.54255 8.91357C6.54255 8.60293 6.8064 8.35107 7.13184 8.35107H9.09612C9.42155 8.35107 9.68541 8.60293 9.68541 8.91357V10.7886C9.68541 11.0992 9.42155 11.3511 9.09612 11.3511H7.13184C6.8064 11.3511 6.54255 11.0992 6.54255 10.7886V8.91357ZM9.09612 15.8511H7.13184C6.8064 15.8511 6.54255 15.5992 6.54255 15.2886V13.4136C6.54255 13.1029 6.8064 12.8511 7.13184 12.8511H9.09612C9.42155 12.8511 9.68541 13.1029 9.68541 13.4136V15.2886C9.68541 15.5992 9.42155 15.8511 9.09612 15.8511ZM12.8283 23.3511H9.68541V19.4136C9.68541 19.1029 9.94926 18.8511 10.2747 18.8511H12.239C12.5644 18.8511 12.8283 19.1029 12.8283 19.4136V23.3511ZM15.9711 15.2886C15.9711 15.5992 15.7073 15.8511 15.3818 15.8511H13.4176C13.0921 15.8511 12.8283 15.5992 12.8283 15.2886V13.4136C12.8283 13.1029 13.0921 12.8511 13.4176 12.8511H15.3818C15.7073 12.8511 15.9711 13.1029 15.9711 13.4136V15.2886ZM15.9711 10.7886C15.9711 11.0992 15.7073 11.3511 15.3818 11.3511H13.4176C13.0921 11.3511 12.8283 11.0992 12.8283 10.7886V8.91357C12.8283 8.60293 13.0921 8.35107 13.4176 8.35107H15.3818C15.7073 8.35107 15.9711 8.60293 15.9711 8.91357V10.7886ZM15.9711 6.28857C15.9711 6.59922 15.7073 6.85107 15.3818 6.85107H13.4176C13.0921 6.85107 12.8283 6.59922 12.8283 6.28857V4.41357C12.8283 4.10293 13.0921 3.85107 13.4176 3.85107H15.3818C15.7073 3.85107 15.9711 4.10293 15.9711 4.41357V6.28857Z" fill="white"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <p>77 Highfield Road London N36 7SB</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 m-b20">
                                        <div className="icon-bx-wraper style-2">
                                            <div className="icon-bx-sm radius">
                                                <span className="icon-cell">
                                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.3722 16.9589L16.5597 14.7089C16.3541 14.6134 16.1257 14.5932 15.9087 14.6515C15.6917 14.7099 15.4979 14.8435 15.3566 15.0324L13.2254 17.873C9.88055 16.1526 7.18876 13.2161 5.61172 9.56722L8.21562 7.24222C8.38908 7.08832 8.51185 6.87696 8.56535 6.64014C8.61884 6.40331 8.60015 6.15392 8.51211 5.92972L6.44961 0.67973C6.35298 0.438047 6.18207 0.240721 5.96636 0.121777C5.75065 0.00283366 5.50366 -0.0302721 5.26797 0.0281687L0.799219 1.15317C0.571987 1.21041 0.36925 1.34999 0.224097 1.54911C0.0789444 1.74824 -5.2345e-05 1.99516 2.60228e-08 2.24957C2.60228e-08 14.273 8.9332 23.9995 19.9375 23.9995C20.1708 23.9997 20.3972 23.9136 20.5799 23.7552C20.7625 23.5969 20.8905 23.3756 20.943 23.1277L21.9742 18.2527C22.0274 17.9943 21.9965 17.7238 21.8866 17.4877C21.7767 17.2515 21.5948 17.0646 21.3722 16.9589Z" fill="white"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <p>412 444 1124</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ContectForm />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
