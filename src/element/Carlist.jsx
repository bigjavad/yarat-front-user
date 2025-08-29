import React from 'react'
import Pagination from './Pagination';
import {IMAGE} from '@/constent/theme';
import Link from "next/link";


let carList = [
    {title: "باگی دو نفره", capacity: 2, image: [IMAGE.dealPic1], id: 1, description: "توضیحات"},
    {title:"باگی چهار نفره",capacity:4,image:[IMAGE.dealPic2],id:2,description:"توضیحات"},
    {title:"باگی هشت نفره",capacity:8,image:[IMAGE.dealPic3],id:3,description:"توضیحات"},
    {title:"باگی دوازده نفره",capacity:12,image:[IMAGE.dealPic4],id:4,description:"توضیحات"},
]

export const Carlist = () => {
    return (
        <div className="col-xl-8 col-lg-8">
            <div className="row lightgallery">
                {carList.map((list, listKey) => (
                    <div className="col-xl-6 col-lg-12 col-md-6 m-b30" key={listKey}>
                        <div className="car-list-box">
                            <div className="media-box">
                                <img src={list.image[0]} alt={list.image[0]}/>
                            </div>
                            <div className="list-info">
                                <h4 className="title mb-0"><Link href={'/car-details'} data-splitting>{list.img}</Link></h4>
                                <span className="badge m-b30">900,000,000 تومان</span>
                                <div className="feature-list">
                                    <div>
                                        <label>ظرفیت</label>
                                        <p className="value">{list.capacity} نفر </p>
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
                ))}
            </div>
            <Pagination/>
        </div>
    )
}


export default Carlist;
