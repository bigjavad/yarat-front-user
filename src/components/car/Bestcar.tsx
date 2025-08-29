import React from 'react'
import CarFuturSlide from '../../element/CarFuturSlide'
    ;
import Link from "next/link";


const Bestcar = () => {
    return (
        <>
            <div className="row features-box">
                <CarFuturSlide/>
                <div className="col-lg-6 align-self-center m-b30">
                    <div className="content-box right">
                        <div className="section-head">
                            <h2 className="title">گارانتی یارات موتور</h2>
                        </div>
                        <p className="m-b40">
                            هر محصول یارات موتور با بالاترین استانداردهای کیفیت ساخته می‌شود و شامل گارانتی رسمی کارخانه
                            است.
                            شاسی مقاوم، موتور پرقدرت و سیستم‌های ایمنی تست‌شده، تضمین می‌کنند که سفرهای شما با باگی
                            یارات نه تنها هیجان‌انگیز، بلکه ایمن و بدون نگرانی باشد.
                            در صورت هرگونه نقص فنی یا مشکل عملکرد، ما پشت شما هستیم تا سریع‌ترین خدمات را ارائه دهیم.
                        </p>
                        <Link href="/waranty" className="btn btn-primary effect-1"><span>شرایط گارانتی</span></Link>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Bestcar
