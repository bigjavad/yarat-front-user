'use client'
import React, { useReducer, useRef, useState } from 'react'
import Homeslide from '../element/Homeslide'
import { IMAGE } from '@/constent/theme'
import Link from "next/link";
import Image from 'next/image';

const selectOption1 = [
    { title: 'Make' },
    { title: 'BMW' },
    { title: 'Honda' },
    { title: 'Hyundai' },
    { title: 'Nissan' },
    { title: 'Mercedes Benz ' },
]

const selectOption2 = [
    { title: 'CLASS' },
    { title: '2010' },
    { title: '2011' },
    { title: '2012' },
]

const selectOption3 = [
    { title: 'MODEl' },
    { title: '3-Series' },
    { title: 'Carrera' },
    { title: 'GT-R' },
    { title: 'Cayenne' },
    { title: 'Mazda6 ' },
    { title: 'Macan ' },
]

const Homebanner = () => {
    const [optinActive, setOptinActive] = useState(0);
    const [optinActive2, setOptinActive2] = useState(0);
    const [optinActive3, setOptinActive3] = useState(0);
    const text = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);

    const reducer = (state, action) => {
        switch (action.type) {
            case "showOtion1":
                return { ...state, Value1: !state.Value1, Value2: false, Value3: false }
            case "showOtion2":
                return { ...state, Value2: !state.Value2, Value1: false, Value3: false }
            case "showOtion3":
                return { ...state, Value3: !state.Value3, Value1: false, Value2: false }
            case "selectedButton":
                setOptinActive(action.ind);
                if (text.current) {
                    text.current.textContent = selectOption1[action.ind].title;
                }
                return { ...state, Value1: false }
            case "selectedButton2":
                setOptinActive2(action.ind);
                if (text2.current) {
                    text2.current.textContent = selectOption2[action.ind].title;
                }
                return { ...state, Value2: false }
            case "selectedButton3":
                setOptinActive3(action.ind);
                if (text3.current) {
                    text3.current.textContent = selectOption3[action.ind].title;
                }
                return { ...state, Value3: false }
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
                    <div className="trending-box">
                        <span className="text-btn">TRENDING</span>
                        2023 FORT MUSTANG
                    </div>
                    <h1 className="title">Say hello to best car dealer platform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div className="car-search-box row item3 p-10">
                        <div className="col-md-3 col-sm-6">
                            <div className="selected-box">
                                <div className="inner show">
                                    <button
                                        onClick={() => { dispatch({ type: 'showOtion1' }) }}
                                        className="dropdown-item hoverNone"
                                    ><span ref={text} className="text">Make </span></button>
                                    <ul className={`dropdown-menu inner ${state.Value1 === true ? 'show' : ''}`}>
                                        {selectOption1.map((item, ind) => (
                                            <li className="selected" key={ind}
                                                onClick={() => { dispatch({ type: 'selectedButton', ind: ind }) }}
                                            >
                                                <button className={`dropdown-item ${optinActive === ind ? 'active' : ''}`}><span className="text">{item.title}</span></button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="selected-box">
                                <div className="inner show">
                                    <button
                                        onClick={() => { dispatch({ type: 'showOtion2' }) }}
                                        className="dropdown-item hoverNone"
                                    ><span ref={text2} className="text">CLASS</span></button>
                                    <ul className={`dropdown-menu inner ${state.Value2 === true ? 'show' : ''}`}>
                                        {selectOption2.map((item, ind) => (
                                            <li className="selected" key={ind}
                                                onClick={() => { dispatch({ type: 'selectedButton2', ind: ind }) }}
                                            >
                                                <button className={`dropdown-item ${optinActive2 === ind ? 'active' : ''}`}><span className="text">{item.title}</span></button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="selected-box">
                                <div className="inner show">
                                    <button
                                        onClick={() => { dispatch({ type: 'showOtion3' }) }}
                                        className="dropdown-item hoverNone"
                                    ><span ref={text3} className="text">MODEl</span></button>
                                    <ul className={`dropdown-menu inner ${state.Value3 === true ? 'show' : ''}`}>
                                        {selectOption3.map((item, ind) => (
                                            <li className="selected" key={ind}
                                                onClick={() => { dispatch({ type: 'selectedButton3', ind: ind }) }}
                                            >
                                                <button className={`dropdown-item ${optinActive3 === ind ? 'active' : ''}`}><span className="text">{item.title}</span></button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Link href={'/car-listing'} className="btn btn-lg effect-1 shadow-none btn-primary d-flex justify-content-between">
                                <span className="d-flex justify-content-between w-100">FIND<i className="las la-long-arrow-alt-right"></i></span>
                            </Link>
                        </div>
                        <Image className="img2 move-2" src={IMAGE.patternImg5} alt="" width={100} height={100} />
                    </div>
                    <Link href={"/car-listing"} className="btn-link-lg">Try advanced search <i className="las la-long-arrow-alt-right"></i></Link>
                    <div className="tags-area">
                        <p>Popular Brands</p>
                        <ul className="tag-list">
                            <li><Link href={'/car-listing?brand=hondo'}>HONDO</Link></li>
                            <li><Link href={'/car-listing?brand=fort'}>FORT</Link></li>
                            <li><Link href={'/car-listing?brand=toyoto'}>TOYOTO</Link></li>
                            <li><Link href={'/car-listing?brand=porce'}>PORCE</Link></li>
                        </ul>
                    </div>
                    <Image className="img1 move-1" src={IMAGE.patternImg} alt="" width={100} height={100} />
                </div>
            </div>
            <Homeslide />
        </>
    )
}

export default Homebanner
