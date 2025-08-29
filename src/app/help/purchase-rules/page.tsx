"use client"
import React, {useState} from 'react';
import CarListingBanner from "@/element/car-listing-banner";
import {IMAGE} from "@/constent/theme";
import { Container, Row, Col, Card, Accordion, Badge } from 'react-bootstrap';
import ContectUs from "@/components/contect-us/ContectUs";
function Page() {
    const [activeKey, setActiveKey] = useState('0');

    const rulesSections = [
        {
            title: "قوانین عمومی",
            icon: "📋",
            items: [
                {
                    question: "شرایط خرید باگی‌ها",
                    answer: "برای خرید باگی‌های یارات، کافی است از طریق وب‌سایت سفارش دهید. ثبت سفارش مستلزم ارائه اطلاعات صحیح و کامل مشتری می‌باشد."
                },
                {
                    question: "شرایط پرداخت",
                    answer: "پرداخت‌ها به صورت آنلاین یا واریز بانکی انجام می‌شود. امکان پرداخت مرحله‌ای نیز بسته به مدل باگی و شرایط فروش وجود دارد."
                },
                {
                    question: "گارانتی باگی‌ها",
                    answer: "تمام باگی‌های یارات شامل گارانتی رسمی کارخانه هستند. هرگونه نقص فنی تحت پوشش گارانتی قرار می‌گیرد و خدمات پس از فروش ارائه می‌شود."
                },
                {
                    question: "کاستوم کردن باگی",
                    answer: "شما می‌توانید باگی خود را طبق سلیقه خود شخصی‌سازی کنید، از رنگ بدنه تا سیستم تعلیق و تجهیزات اضافی. سفارشات کاستوم قبل از تولید تایید نهایی می‌شوند."
                },
                {
                    question: "شرایط سنی استفاده از باگی‌ها",
                    answer: "حداقل سن برای رانندگی با باگی‌ها 18 سال است و کاربران زیر 18 سال نیاز به همراهی والدین دارند."
                },
                {
                    question: "مسئولیت‌های کاربران",
                    answer: "کاربران موظفند باگی را طبق دستورالعمل استفاده کنند و از ایمنی خود و دیگران مطمئن شوند. هر گونه خسارت ناشی از استفاده نادرست بر عهده کاربر است."
                },
                {
                    question: "تغییرات قوانین و شرایط",
                    answer: "ما حق تغییر قوانین و شرایط استفاده را داریم و کاربران از طریق ایمیل یا اعلان در پنل کاربری از تغییرات مطلع خواهند شد."
                }
            ]
        },

    ];


    return (
        <div>
            <div className="page-content bg-white">

                <div className="page-content bg-white">
                    <CarListingBanner img={IMAGE.bnr1} title={'قوانین خرید'} />
                    <Container className="py-5">

                        <div className="terms-section">
                            <p>لطفاً پیش از استفاده از خدمات وبسایت ما، قوانین و مقررات زیر را به‌دقت مطالعه فرمایید.
                                استفاده از این وبسایت به‌منزله پذیرش کامل این قوانین است.</p>

                            <h4>۱. پذیرش شرایط استفاده</h4>
                            <ul>
                                <li>هرگونه استفاده از وبسایت یارات موتورز (www.yaratmotors.com) به‌معنای پذیرش تمامی
                                    شرایط و قوانین مندرج در این صفحه است.
                                </li>
                                <li> یارات موتورز حق تغییر یا به‌روزرسانی این قوانین را در هر زمان بدون اطلاع قبلی محفوظ
                                    می‌دارد. کاربران موظف‌اند به‌صورت دوره‌ای این صفحه را بررسی کنند.
                                </li>
                            </ul>

                            <h4 className={"mt-5"}>۲. مالکیت فکری</h4>
                            <ul>
                                <li>تمامی محتوای وبسایت شامل متن‌ها، تصاویر، لوگوها، و طراحی‌ها متعلق به یارات موتورز
                                    بوده و استفاده غیرمجاز از آن‌ها بدون کسب اجازه کتبی ممنوع است.
                                </li>
                                <li>هرگونه کپی‌برداری، بازنشر یا استفاده تجاری از محتوای وبسایت پیگرد قانونی خواهد
                                    داشت.
                                </li>
                            </ul>

                            <h4 className={"mt-5"}>۳. شرایط خرید و خدمات</h4>
                            <ul>
                                <li><strong>سفارش و پرداخت:</strong> خرید محصولات (خودروهای باگی و قطعات) تنها از طریق
                                    روش‌های پرداخت معرفی‌شده در وبسایت امکان‌پذیر است. اطلاعات دقیق سفارش در فاکتور رسمی
                                    ارائه می‌شود.
                                </li>
                                <li><strong>تحویل محصول:</strong> زمان و نحوه تحویل محصولات مطابق با شرایط اعلام‌شده در
                                    زمان خرید است. یارات موتورز مسئولیتی در قبال تأخیرهای ناشی از عوامل غیرقابل‌کنترل
                                    (مانند بلایای طبیعی یا مشکلات حمل‌ونقل) ندارد.
                                </li>
                                <li><strong>گارانتی و خدمات پس از فروش:</strong> محصولات یارات موتورز دارای گارانتی
                                    معتبر هستند. شرایط گارانتی و خدمات پس از فروش در زمان خرید به اطلاع مشتری خواهد
                                    رسید.
                                </li>
                            </ul>

                            <h4 className={"mt-5"}>۴. حریم خصوصی</h4>
                            <ul>
                                <li>یارات موتورز متعهد به حفاظت از اطلاعات شخصی کاربران است. اطلاعات شما تنها برای
                                    پردازش سفارشات و ارائه خدمات استفاده خواهد شد و در اختیار اشخاص ثالث قرار نمی‌گیرد،
                                    مگر با رضایت شما یا بر اساس الزامات قانونی.
                                </li>
                                <li>برای اطلاعات بیشتر، به صفحه سیاست حفظ حریم خصوصی مراجعه کنید.</li>
                            </ul>

                            <h4 className={"mt-5"}>۵. تماس و پشتیبانی</h4>
                            <ul>
                                <li>برای هرگونه سوال، انتقاد یا پیشنهاد، می‌توانید از طریق بخش تماس با ما در وبسایت یا
                                    شماره‌های پشتیبانی اعلام‌شده اقدام کنید.
                                </li>
                                <li>پشتیبانی یارات موتورز در ساعات کاری آماده پاسخگویی به شماست.</li>
                            </ul>
                        </div>

                        <Row className="my-5">
                            <Col>
                                <Card className="border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <Card.Title as="h3" className="text-center mb-3">
                                            یارات موتور
                                        </Card.Title>
                                        <Card.Text className="text-center fs-6">
                                            با تشکر از اعتماد شما، لطفاً قبل از استفاده از خدمات، قوانین و مقررات را به
                                            دقت مطالعه فرمایید.
                                            استفاده از خدمات ما به منزله پذیرش کامل این قوانین می‌باشد.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                            {rulesSections.map((category, categoryIndex) => (
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
                    <section className="content-inner">
                        <div className="container">
                            <ContectUs/>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    );
}

export default Page;
