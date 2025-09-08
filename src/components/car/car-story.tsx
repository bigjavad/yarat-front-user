import React from 'react'
import Link from "next/link";



const CarStory = () => {
    return (
        <>
            <div className="row features-box">
                <div className="col-lg-6 m-b30 m-sm-b0">
                    <div className=" image-slider-box position-relative ">
                        <img className="rounded-3" src="/assets/images/edited/edited-3.webp" alt="یارات موتورز"/>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center m-b30">
                    <div className="content-box right">
                        <div className="section-head">
                            <h3 className="title">تجربه ماجراجویی با خانواده و دوستان</h3>
                        </div>
                        <p className="m-b40">
                            یارات موتورز؛ سازنده باگی‌های حرفه‌ای برای کشف ناشناخته‌ها. از سفرهای دو نفره عاشقانه تا ماجراجویی‌های گروهی دوازده نفره. هر جاده‌ای، با هر تعداد همسفر، به یک خاطره فراموش‌نشدنی تبدیل می‌شود. ماجرای بعدی شما با کدام مدل آغاز می‌شود؟
                        </p>
                        <Link href="/car-listing" className="btn btn-primary effect-1"><span>مشاهده محصولات</span></Link>

                    </div>
                </div>
            </div>


        </>
    )
}

export default CarStory
