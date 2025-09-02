'use client'
import React, {useReducer, useRef, useState} from 'react'
import Homeslide from '../../element/homeslide'
import {IMAGE} from '@/constent/theme'
import Link from "next/link";
import Image from 'next/image';

const selectOption1 = [
    {title: 'Make'},
    {title: 'BMW'},
    {title: 'Honda'},
    {title: 'Hyundai'},
    {title: 'Nissan'},
    {title: 'Mercedes Benz '},
]

const selectOption2 = [
    {title: 'CLASS'},
    {title: '2010'},
    {title: '2011'},
    {title: '2012'},
]

const selectOption3 = [
    {title: 'MODEl'},
    {title: '3-Series'},
    {title: 'Carrera'},
    {title: 'GT-R'},
    {title: 'Cayenne'},
    {title: 'Mazda6 '},
    {title: 'Macan '},
]

const HomeBanner = () => {
    const [optinActive, setOptinActive] = useState(0);
    const [optinActive2, setOptinActive2] = useState(0);
    const [optinActive3, setOptinActive3] = useState(0);
    const text = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);

    const reducer = (state, action) => {
        switch (action.type) {
            case "showOtion1":
                return {...state, Value1: !state.Value1, Value2: false, Value3: false}
            case "showOtion2":
                return {...state, Value2: !state.Value2, Value1: false, Value3: false}
            case "showOtion3":
                return {...state, Value3: !state.Value3, Value1: false, Value2: false}
            case "selectedButton":
                setOptinActive(action.ind);
                if (text.current) {
                    text.current.textContent = selectOption1[action.ind].title;
                }
                return {...state, Value1: false}
            case "selectedButton2":
                setOptinActive2(action.ind);
                if (text2.current) {
                    text2.current.textContent = selectOption2[action.ind].title;
                }
                return {...state, Value2: false}
            case "selectedButton3":
                setOptinActive3(action.ind);
                if (text3.current) {
                    text3.current.textContent = selectOption3[action.ind].title;
                }
                return {...state, Value3: false}
            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        Value1: false,
        Value2: false,
        Value3: false
    });

    return (
        <>
            <div className="col-lg-6 align-self-center">
                <div className="banner-content">
                    <h1 className="title">یارات موتورز</h1>
                    <p>
                        یارات فقط یک وسیله نقلیه نیست؛ یارات دعوتی است برای ساختن ماجراجویی‌های خودتان.
                        <br/>
                        هر خط بدنه و هر غرش موتور برای یک هدف ساخته شده: آماده بودن در برابر ناشناخته‌ها.
                        یارات مخصوص کسانی است که به جای دنبال کردن جاده‌ها، مسیر تازه‌ای می‌سازند.
                        چه در تپه‌های شنی، چه در جنگل‌های گل‌آلود و چه در صخره‌های بلند، یارات همراه شماست تا راه خودتان
                        را پیدا کنید.
                    </p>
                    <div className="col-md-3 col-sm-6">
                        <Link href={'/car-listing'}
                              className="btn btn-sm effect-1 shadow-none text-sm-center btn-primary d-flex justify-content-between">
                            <span className="d-flex justify-content-between mx-auto">مشاهده محصولات</span>
                        </Link>
                    </div>
                    <div className="d-block mt-5 ">
                        <ul className="d-flex gap-md-3 gap-1 justify-content-between justify-content-md-start mt-2 ">
                            <li><Link className="btn btn-sm btn-outline-primary font-12" href={'/car-listing?brand=hondo'}>باگی
                                2</Link></li>
                            <li><Link className="btn btn-sm btn-outline-primary font-12" href={'/car-listing?brand=hondo'}>باگی
                                4 نفره</Link></li>
                            <li><Link className="btn btn-sm btn-outline-primary font-12" href={'/car-listing?brand=fort'}>باگی
                                8 نفره</Link></li>
                            <li><Link className="btn btn-sm btn-outline-primary font-12" href={'/car-listing?brand=toyoto'}>باگی
                                12 نفره </Link></li>
                        </ul>
                    </div>
                    <Image className="img1 move-1 d-md-block d-none" src={IMAGE.patternImg} alt="" width={100} height={100}/>
                </div>
            </div>
            <Homeslide/>
        </>
    )
}

export default HomeBanner
