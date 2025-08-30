"use client"
import React, { useState } from 'react'
import {IMAGE} from "@/constent/theme";
import CarListingBanner from "@/element/car-listing-banner";
import CarOverview from "@/components/car/car-overview";
import Link from "next/link";
import CarDetailSpacation from "@/components/car/car-detail-spacation";



const CarDetail_2 = () => {
  const [addActive, setActive] = useState('Overview')
  const [banner, setBanner] = useState([IMAGE.bannerImg1]);
  const [heading, setHeading] = useState('Car Details');
  const [data, setData] = useState(<CarOverview />);


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
      // case 'Price':
      //   setBanner([IMAGE.bnr2])
      //   setHeading('Car Price')
      //   setActive('Price')
      //   setData(<CarDetailPrice />)
      //   break;
      // case 'Compare':
      //   setBanner([IMAGE.bnr2])
      //   setHeading('Compare Result')
      //   setActive('Compare')
      //   setData(<CarDetailCompare />)
      //   break;
      // case 'Pictures':
      //   setBanner([IMAGE.bnr2])
      //   setHeading('Car Pictures')
      //   setActive('Pictures')
      //   setData(<CarDetailPicture />)
      //   break;

      default:
        break;
    }
  }


  return (
    <>
      <div className="page-content bg-white">
        <CarListingBanner img={banner} title={heading} />
        <div className="car-details-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="nav">
                  <ul>
                    <li className={`${addActive === 'Overview' ? 'active' : ''}`} onClick={() => { changeData('Overview') }}><Link href="#">توضیحات</Link></li>
                    <li className={`${addActive === 'Specifications' ? 'active' : ''}`} onClick={() => { changeData('Specifications') }}><Link href="#">مشحصات فنی</Link></li>
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

export default CarDetail_2
