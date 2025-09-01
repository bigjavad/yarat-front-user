import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slider = [
    {imag1: '/assets/images/gallery/5.webp',
        name:"باگی دو نفره"
    },
    {imag1: '/assets/images/gallery/15.webp',
        name:"باگی دو نفره"},
    {imag1: '/assets/images/gallery/24.webp',
        name:"باگی دوازده نفره"},
    {imag1: '/assets/images/gallery/88.webp',
        name:"باگی دوازده نفره"},
    {imag1: '/assets/images/gallery/92.webp',
        name:"باگی دوازده نفره"},
];

const Homeslide = (props) => {
    const swiperRef = React.useRef(null);

    return (


        <div className="col-lg-6">
            <div className="banner-slider">
                <Swiper
                    className="swiper-container main-silder-swiper"
                    spaceBetween={30}
                    effect={"fade"}
                    speed={1500}
                    modules={[EffectFade,  Autoplay]}
                    autoplay={{delay: 1200}}
                    loop={true}
                    ref={swiperRef}
                >
                    {slider.map((slide, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                            <div className="dlab-slide-item">
                                <div className="silder-content">
                                    <div className="inner-content">
                                        <div className="left">
                                            <p className="car-type">{slide.name}</p>
                                            {/*<p className="car-name slide-vertical">Porce 123 GT</p>*/}
                                        </div>
                                        {/*<div className="right">*/}
                                        {/*    <p className="price-label">Starting at </p>*/}
                                        {/*    <p className="car-price">$ 20,500</p>*/}
                                        {/*</div>*/}
                                    </div>
                                    <Link href="/car-listing" className="discover-link">
                                       نمابش بیشتر
                                    </Link>
                                </div>
                                <div className="slider-img">
                                    <Image
                                        src={slide.imag1}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                        style={{objectFit: 'cover'}}
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="slider-one-pagination">
                        <div
                            className="btn-prev swiper-button-prev1 cursorPointer"
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div
                            className="btn-next swiper-button-next1 cursorPointer"
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Homeslide;
