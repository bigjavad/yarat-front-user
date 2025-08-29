"use client"
import React, { useState } from 'react';
import { IMAGE } from '@/constent/theme';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from "next/link";

const gallery = [
    { category: 'two', img: '/assets/images/gallery/1.webp' },
    { category: 'two', img: '/assets/images/gallery/2.webp' },
    { category: 'two', img: '/assets/images/gallery/3.webp' },
    { category: 'two', img: '/assets/images/gallery/4.webp' },
    { category: 'two', img: '/assets/images/gallery/5.webp' },
    { category: 'two', img: '/assets/images/gallery/6.webp' },
    { category: 'two', img: '/assets/images/gallery/7.webp' },
    { category: 'two', img: '/assets/images/gallery/8.webp' },
    { category: 'two', img: '/assets/images/gallery/9.webp' },
    { category: 'two', img: '/assets/images/gallery/10.webp' },
    { category: 'two', img: '/assets/images/gallery/11.webp' },
    { category: 'two', img: '/assets/images/gallery/12.webp' },
    { category: 'two', img: '/assets/images/gallery/13.webp' },
    { category: 'two', img: '/assets/images/gallery/14.webp' },
    { category: 'two', img: '/assets/images/gallery/15.webp' },
    { category: 'two', img: '/assets/images/gallery/16.webp' },
    { category: 'two', img: '/assets/images/gallery/18.webp' },
    { category: 'two', img: '/assets/images/gallery/20.webp' },
    { category: 'two', img: '/assets/images/gallery/21.webp' },
    { category: 'two', img: '/assets/images/gallery/22.webp' },
    { category: 'two', img: '/assets/images/gallery/23.webp' },
    { category: 'two', img: '/assets/images/gallery/24.webp' },
    { category: 'two', img: '/assets/images/gallery/25.webp' },
    { category: 'two', img: '/assets/images/gallery/26.webp' },
    { category: 'two', img: '/assets/images/gallery/27.webp' },
    { category: 'two', img: '/assets/images/gallery/28.webp' },
    { category: 'two', img: '/assets/images/gallery/28.webp' },

    { category: 'eight', img: '/assets/images/gallery/80.webp' },
    { category: 'eight', img: '/assets/images/gallery/81.webp' },
    { category: 'eight', img: '/assets/images/gallery/82.webp' },
    { category: 'eight', img: '/assets/images/gallery/83.webp' },
    { category: 'eight', img: '/assets/images/gallery/84.webp' },
    { category: 'eight', img: '/assets/images/gallery/85.webp' },
    { category: 'eight', img: '/assets/images/gallery/86.webp' },
    { category: 'eight', img: '/assets/images/gallery/88.webp' },
    { category: 'eight', img: '/assets/images/gallery/89.webp' },

    { category: 'twelve', img: '/assets/images/gallery/90.webp' },
    { category: 'twelve', img: '/assets/images/gallery/91.webp' },
    { category: 'twelve', img: '/assets/images/gallery/92.webp' },
    { category: 'twelve', img: '/assets/images/gallery/93.webp' },
    { category: 'twelve', img: '/assets/images/gallery/94.webp' },
    { category: 'twelve', img: '/assets/images/gallery/95.webp' },
    { category: 'twelve', img: '/assets/images/gallery/96.webp' },
    { category: 'twelve', img: '/assets/images/gallery/97.webp' },
 ];

const Ourproject = () => {
    const [imgGallery, setImgGallery] = useState(gallery);
    const [addactive, setAddactive] = useState('all');

    const gelleryfilterBtn = (filterImgdata) => {
        if (filterImgdata === 'all') {
            setImgGallery(gallery); // نمایش همه تصاویر
        } else {
            const updateItems = gallery.filter((item) => item.category === filterImgdata);
            setImgGallery(updateItems);
        }
        setAddactive(filterImgdata);
    };

    return (
        <div className="section-full bg-img-fix content-inner bg-gray" id="project">
            <div className="container">
                <div className="section-head text-center head-style-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                    <h2 className="title">گالری ما</h2>
                    <div className="dlab-separator-outer">
                        <div className="dlab-separator bg-primary"></div>
                    </div>
                    <p>
                        در گالری یارات، مجموعه‌ای از خودروهای متنوع و خدمات تخصصی تعمیر و نگهداری خودرو را به نمایش می‌گذاریم.
                        هر تصویر نشان‌دهنده کیفیت، دقت و تعهد ما به رضایت مشتریان است.
                    </p>
                </div>

                <div className="site-filters style-1 clearfix center m-b40">
                    <ul className="filters" data-toggle="buttons">
                        <li onClick={() => gelleryfilterBtn('all')} className={`btn ${addactive === 'all' ? 'active' : ''}`}>
                            <input type="radio" />
                            <Link href={'#'} className="site-button-secondry wow fadeInUp"><span>نمایش همه</span></Link>
                        </li>
                        <li onClick={() => gelleryfilterBtn('two')} className={`btn ${addactive === 'two' ? 'active' : ''}`}>
                            <Link href={'#'} className="site-button-secondry wow fadeInUp"><span>باگی دو نفره</span></Link>
                        </li>
                        <li onClick={() => gelleryfilterBtn('four')} className={`btn ${addactive === 'four' ? 'active' : ''}`}>
                            <Link href={'#'} className="site-button-secondry wow fadeInUp"><span>باگی چهار نفره</span></Link>
                        </li>
                        <li onClick={() => gelleryfilterBtn('eight')} className={`btn ${addactive === 'eight' ? 'active' : ''}`}>
                            <Link href={'#'} className="site-button-secondry wow fadeInUp"><span>باگی هشت نفره</span></Link>
                        </li>
                        <li onClick={() => gelleryfilterBtn('twelve')} className={`btn ${addactive === 'twelve' ? 'active' : ''}`}>
                            <Link href={'#'} className="site-button-secondry wow fadeInUp"><span>باگی دوازده نفره</span></Link>
                        </li>
                    </ul>
                </div>

                <div className="masonaryContainer">
                    <div className="container">
                        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                            {imgGallery.map((image, index) => (
                                <div data-exthumbimage={image.img} data-src={image.img} className="figure" key={index}>
                                    <li className="office card-container">
                                        <div className="dlab-box dlab-gallery-box">
                                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect zoom-slow dlab-img-effect zoom">
                                                <img src={image.img} alt={image.category} />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                        <span className="fas fa-image icon-bx-xs check-km lightimg m-l10" title="Light Gallery Grid 1"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </LightGallery>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourproject;
