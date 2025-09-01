import React from 'react'
import { IMAGE } from '@/constent/theme'
import { Form } from 'react-bootstrap'
import Link from "next/link";

const LatestCarBanner = (props) => {
    return (
        <>
            <div className="dlab-bnr-inr dlab-bnr-inr-lg style-1 overlay-black-middle" style={{ backgroundImage: `url(${props.img})` }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">{props.title}</h1>
                        <div className="dlab-separator"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestCarBanner
