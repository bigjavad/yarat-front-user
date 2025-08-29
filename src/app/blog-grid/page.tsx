"use client"
import React, { useRef, useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE } from "@/constent/theme";
import CarlistingBanner from "@/element/CarlistingBanner";
import BlogDridCard from "@/element/BlogDridCard";
import Link from "next/link";
import Image from 'next/image';
import 'swiper/css';


const blogSlider = [
    { img: IMAGE.blogGridpic9 },
    { img: IMAGE.blogGridpic10 },
    { img: IMAGE.blogGridpic11 },
]

const BlogGrid = () => {
    const [open, setOpen] = useState(false);
    const swiperRef = useRef(null);

    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={open}
                videoId="PkkV1vLHUvQ"
                onClose={() => setOpen(false)}
            />

            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr1} title={'Blog Grid'} />

                <section className="content-inner">
                    <div className="container">
                        <div className="clearfix">
                            <ul id="masonry" className="row blog-masonry">
                                <BlogDridCard
                                    date={'Jun 26,2023'}
                                    img={IMAGE.blogGridpic1}
                                    heading={'What You Can Learn From Bill Your Bussiness'}
                                />
                                <BlogDridCard
                                    date={'Jun 26,2023'}
                                    img={IMAGE.blogGridpic4}
                                    heading={'Does Industry Sometimes Make You Feel Stupid?'}
                                />
                                <BlogDridCard
                                    date={'Jun 26,2023'}
                                    img={IMAGE.blogGridpic2}
                                    heading={'SuperEasy Ways To Learn Everything About Industry'}
                                />
                                <BlogDridCard
                                    date={'Jun 26,2023'}
                                    img={IMAGE.blogGridpic5}
                                    heading={'What You Can Learn From Bill Gates About Industry'}
                                />
                                <li className="card-container grid-item col-xl-4 col-md-6">
                                    <div className="dlab-card style-1 shadow m-b30">
                                        <div className="dlab-media video-bx style-2 h-auto">
                                            <Link href="/blog-details">
                                                <Image
                                                    src={IMAGE.blogGridpic3}
                                                    alt=""
                                                    width={400}
                                                    height={250}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Link>
                                            <div className="video-btn sm" onClick={() => { setOpen(true) }}>
                                                <button className="popup-youtube">
                                                    <i className="fa fa-play"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="dlab-meta">
                                                <ul>
                                                    <li className="post-date">Jun 26,2023</li>
                                                </ul>
                                            </div>
                                            <h4 className="dlab-title">
                                                <Link href="/blog-details">
                                                    Heres A Quick Way To Solve A Problem Industry
                                                </Link>
                                            </h4>
                                            <p>Qui nunc nobis videntur parum clari, sollemnes in futurum putamus parum
                                                claram legere.</p>
                                        </div>
                                    </div>
                                </li>
                                <BlogDridCard
                                    date={'Jun 26,2023'}
                                    img={IMAGE.blogGridpic6}
                                    heading={'The Next 3 Things To Immediately Do Industry'}
                                />
                                <BlogDridCard
                                    date={'Jun 26,2023'}
                                    img={IMAGE.blogGridpic7}
                                    heading={'Open The Gates For Industry By Using These Simple Tips'}
                                />

                                <li className="card-container grid-item col-xl-4 col-md-6">
                                    <div className="dlab-card style-1 shadow m-b30">
                                        <div className="dlab-media">
                                            <Swiper
                                                className="swiper-container post-swiper"
                                                speed={1200}
                                                loop={true}
                                                ref={swiperRef}
                                            >
                                                <div className="swiper-wrapper">
                                                    {blogSlider.map((item, ind) => (
                                                        <SwiperSlide className="swiper-slide" key={ind}>
                                                            <Link href="/blog-details">
                                                                <Image
                                                                    src={item.img}
                                                                    alt=""
                                                                    width={400}
                                                                    height={250}
                                                                    style={{ objectFit: 'cover' }}
                                                                />
                                                            </Link>
                                                        </SwiperSlide>
                                                    ))}
                                                </div>
                                                <div
                                                    className="prev-post-swiper-btn cursorPointer"
                                                    onClick={() => { swiperRef.current.swiper.slidePrev() }}
                                                >
                                                    <i className="fas fa-chevron-left"></i>
                                                </div>
                                                <div
                                                    className="next-post-swiper-btn cursorPointer"
                                                    onClick={() => { swiperRef.current.swiper.slideNext() }}
                                                >
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </Swiper>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="dlab-meta">
                                                <ul>
                                                    <li className="post-date">Jun 26,2023</li>
                                                </ul>
                                            </div>
                                            <h4 className="dlab-title">
                                                <Link href="/blog-details">
                                                    5 Ways You Can Get More Industry While Spending Less
                                                </Link>
                                            </h4>
                                            <p>Qui nunc nobis videntur parum clari, sollemnes in futurum putamus parum
                                                claram legere.</p>
                                        </div>
                                    </div>
                                </li>
                                <BlogDridCard
                                    heading={'How To Make Your Industry Look Like A Million Bucks'}
                                />
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 text-center m-b30">
                                <Link
                                    href={'/car-service-center'}
                                    className="btn btn-primary btn-border"
                                >
                                    LOAD MORE
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default BlogGrid
