import React from 'react'
import { IMAGE } from '@/constent/theme';
import Link from "next/link";

let carList = [
    {title: "باگی دو نفره", capacity: 2, image: [
            '/assets/images/gallery/1.webp',
            '/assets/images/gallery/2.webp'
        ], id: 1, description: "توضیحات"},
    {title:"باگی چهار نفره",capacity:4,image:[
            '/assets/images/gallery/6.webp',
        ],id:2,description:"توضیحات"},
    {title:"باگی هشت نفره",capacity:8,image:[
            '/assets/images/gallery/80.webp',
            '/assets/images/gallery/81.webp'
        ],id:3,description:"توضیحات"},
    {title:"باگی دوازده نفره",capacity:12,image:[
            '/assets/images/gallery/90.webp',
            '/assets/images/gallery/91.webp'
        ],id:4,description:"توضیحات"},
]


const LatestCarSider = () => {
    return (
        <>

            <div className="row lightgallery">
                {carList.map((item, index) => {
                    return (
                        <div className="col-xl-3 col-lg-4 col-sm-6 m-b30" key={index}>
                            <div className="car-list-box box-sm">
                                <div className="media-box">
                                    <img src={item.image[0]} alt={item.title} />
                                </div>
                                <div className="list-info">
                                    <h5 className="title mb-0"><Link href="/car-details" data-splitting>{item.title}</Link></h5>
                                    <span className="badge m-b30 px-3 py-2 font-10">900,000,000 تومان</span>
                                    <div className="feature-list">
                                        <div>
                                            <label>ظرفیت</label>
                                            <p className="value">{item.capacity}</p>
                                        </div>
                                        <div>
                                            <label>گارانتی</label>
                                            <p className="value">6 ماه موتوری</p>
                                        </div>
                                        <div>
                                            <label>امکانات</label>
                                            <p className="value">فرمان اسپرت , ...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default LatestCarSider
