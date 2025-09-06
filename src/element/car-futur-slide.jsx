'use client'

import React from 'react'
import { Player, BigPlayButton } from 'video-react'
import 'video-react/dist/video-react.css'

const CarFuturSlide = () => {
    return (
        <div className="col-lg-6 md:col-span-3 p-2">
            <div className="image-slider-box rounded-lg overflow-hidden shadow-lg">
                <Player
                    poster="/assets/images/gallery/2.webp"
                    fluid={true} // responsive
                    className="rounded-lg"
                >
                    <source src="/movie.mp4" type="video/mp4" />
                    <BigPlayButton position="center" />
                </Player>
            </div>
        </div>
    )
}

export default CarFuturSlide
