import React from 'react'
import CarFuturSlide from '../../element/car-futur-slide'
import Link from "next/link";


const CarFeatures = () => {
    return (
        <>

            <div className="row features-box">
                <div className="col-lg-6 align-self-center m-b30">
                    <div className="content-box">
                        <div className="section-head">
                            {/*<h6 className="sub-title style-1">We Bring You to The Future</h6>*/}
                            <h2 className="title">یارات موتورز</h2>
                        </div>
                        <p className="m-b40">
                            یارات موتورز نه‌تنها به دنبال توسعه صنعت خودروهای تفریحی و آفرود در ایران است، بلکه با نگاه
                            به بازارهای جهانی، قصد دارد نام ایران را به‌عنوان یک تولیدکننده خلاق و قابل‌اعتماد در این
                            حوزه معرفی کند.
                        </p>
                        <Link href="/car-listing" className="btn btn-primary effect-1"><span>محصولات</span></Link>
                    </div>
                </div>
                <CarFuturSlide/>
            </div>
        </>
    )
}

export default CarFeatures
