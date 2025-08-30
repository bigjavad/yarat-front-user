import React from 'react'
import {IMAGE} from '@/constent/theme';
import Link from "next/link";

let carList = [
    {title: "باگی دو نفره", capacity: 2, image: ['/assets/images/deal/pic1.jpg'], id: 1, description: "توضیحات"},
    {title: "باگی چهار نفره", capacity: 4, image: ['/assets/images/deal/pic2.jpg'], id: 2, description: "توضیحات"},
    {title: "باگی هشت نفره", capacity: 8, image: ['/assets/images/deal/pic3.jpg'], id: 3, description: "توضیحات"},
    {title: "باگی دوازده نفره", capacity: 12, image: ['/assets/images/deal/pic4.jpg'], id: 4, description: "توضیحات"},
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
                                            <Link href="#"><img src={item.image[0]}
                                                                alt={item.title}/></Link>
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link href="#">{item.title}</Link></h4>
                                            <div className="dlab-meta">
                                                <ul>
                                                    <li className="post-date"> تومان 900,000,000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                            <Link href=""
                                  className="btn btn-primary d-block w-100 text-center effect-1"><span>پرفروش ها</span></Link>
                        </div>
                    </div>
                    <div className="widget ads">
                        <img src={'/assets/images/ads/img2.jpg'} alt=""/>
                    </div>
                    <div className="widget client-logo-wg">
                        <div className="widget-title">
                            <h6 className="title">POPULAR CARS BY BRAND</h6>
                            <div className="dlab-separator style-1 text-primary mb-0"></div>
                        </div>
                        <ul>
                            {carList.map((data, ind) => {
                                return (
                                    <li className="brand-logo" key={ind}>
                                        <Link className="d-flex gap-2" href="">
                                            <img src={data.image[0]} alt={data.title}/>
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
