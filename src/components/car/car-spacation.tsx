"use client"
import React, { useState } from 'react'
import CarlistingBanner from "@/element/CarlistingBanner";
import {IMAGE} from "@/constent/theme";
import Link from "next/link";
import CarOverview from "@/components/car/car-overview";
import CarDetailSpacation from "@/components/car/car-detail-spacation";

const CarSpacification = () => {
    const [addActive, setActive] = useState('Specifications')
    const [banner, setBanner] = useState([IMAGE.bnr2]);
    const [heading, setHeading] = useState('Car Specifications');
    const [data, setData] = useState(<CarDetailSpacation />);


    function changeData(action) {
        switch (action) {
            case 'Overview':
                setBanner([IMAGE.bannerImg1])
                setHeading('Car Details')
                setActive('Overview');
                setData(<CarOverview />)
                break;
            case 'Specifications':
                setBanner([IMAGE.bnr2])
                setHeading('Car Specifications')
                setActive('Specifications');
                setData(<CarDetailSpacation />)
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="page-content bg-white theme-rounded">
                <CarlistingBanner img={banner} title={heading} />

                <div className="car-details-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="nav">
                                    <ul>
                                        <li className={`${addActive === 'Overview' ? 'active' : ''}`} onClick={() => { changeData('Overview') }}><Link to="#">Overview</Link></li>
                                        <li className={`${addActive === 'Specifications' ? 'active' : ''}`} onClick={() => { changeData('Specifications') }}><Link to="#">Specifications</Link></li>
                                        <li className={`${addActive === 'Price' ? 'active' : ''}`} onClick={() => { changeData('Price') }}><Link to="#">Price</Link></li>
                                        <li className={`${addActive === 'Compare' ? 'active' : ''}`} onClick={() => { changeData('Compare') }}><Link to="#">Compare</Link></li>
                                        <li className={`${addActive === 'Pictures' ? 'active' : ''}`} onClick={() => { changeData('Pictures') }}><Link to="#">Pictures</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {data}
            </div>
        </>
    )
}

export default CarSpacification
