import React from 'react'
import { IMAGE } from '@/constent/theme';
import Link from "next/link";

let carList = [
    {title: "باگی دو نفره", capacity: 2, image: [IMAGE.dealPic1], id: 1, description: "توضیحات"},
    {title:"باگی چهار نفره",capacity:4,image:[IMAGE.dealPic2],id:2,description:"توضیحات"},
    {title:"باگی هشت نفره",capacity:8,image:[IMAGE.dealPic3],id:3,description:"توضیحات"},
    {title:"باگی دوازده نفره",capacity:12,image:[IMAGE.dealPic4],id:4,description:"توضیحات"},
]
const PopulerCars = (props) => {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-5">
                <aside className="sticky-top">
                    <div className="widget recent-posts-entry">
                        <div className="widget-title">
                            <h6 className="title">{props.categery}</h6>
                            <div className="dlab-separator style-1 text-primary mb-0"></div>
                        </div>
                        <div className="widget-post-bx">
                            {carList.map((item, index) => {
                                return (
                                    <div className="widget-post clearfix" key={index}>
                                        <div className="dlab-media">
                                            <Link href="/popular-cars"><img src={item.image[0]} alt={item.title} /></Link>
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link href="/popular-cars">{item.title}</Link></h4>
                                            <div className="dlab-meta">
                                                <ul>
                                                    <li className="post-date"> تومان 900,000,000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                            <Link href="/car-detail" className="btn btn-primary d-block w-100 text-center effect-1"><span>پرفروش ها</span></Link>
                        </div>
                    </div>
                    <div className="widget ads">
                        <img src={IMAGE.adsImg} alt="" />
                    </div>
                    <div className="widget client-logo-wg">
                        <div className="widget-title">
                            <h6 className="title">POPULAR CARS BY BRAND</h6>
                            <div className="dlab-separator style-1 text-primary mb-0"></div>
                        </div>
                        <ul>
                          {carList.map((data,ind)=>{
                            return(
                                <li className="brand-logo" key={ind}>
                                    <Link className="d-flex gap-2" href="/car-detail">
                                        <img src={data.image[0]} alt={data.title} />
                                    </Link>
                                </li>
                            )
                          })}

                        </ul>
                    </div>
                </aside>
            </div>

        </>
    )
}

export default PopulerCars
