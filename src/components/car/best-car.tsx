import React from 'react';


const BestCar = () => {
    return (
        <>
            <div className="row features-box">
                <div className="col-lg-6 m-b30 m-sm-b0">
                    <div className=" image-slider-box position-relative ">
                        <img className="rounded-3" src="/assets/images/gallery/24.webp" alt="یارات موتورز"/>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center m-b30">
                    <div className="content-box right">
                        <div className="section-head">
                            <h2 className="title">گارانتی یارات موتورز</h2>
                        </div>
                        <p className="m-b40">
                            هر محصول یارات موتورز با بالاترین استانداردهای کیفیت ساخته می‌شود و شامل گارانتی رسمی
                            کارخانه
                            است.
                            شاسی مقاوم، موتور پرقدرت و سیستم‌های ایمنی تست‌شده، تضمین می‌کنند که سفرهای شما با
                            باگی
                            یارات نه تنها هیجان‌انگیز، بلکه ایمن و بدون نگرانی باشد.
                            در صورت هرگونه نقص فنی یا مشکل عملکرد، ما پشت شما هستیم تا سریع‌ترین خدمات را ارائه
                            دهیم.
                        </p>
                        {/*<Link href="/waranty"*/}
                        {/*      className="btn btn-primary effect-1"><span>شرایط گارانتی</span></Link>*/}

                    </div>
                </div>
            </div>


        </>
    )
}

export default BestCar
