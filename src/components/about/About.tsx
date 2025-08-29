import React from 'react'
import AboutSlider from '../../element/AboutSlider'
import {IMAGE} from "@/constent/theme";


const About = () => {
    return (

        <div className="row about-bx1">
            <div className="col-lg-5">
                <div className="dlab-media">
                    <img src={IMAGE.about1} alt=""/>
                </div>
            </div>
            <div className="col-lg-7 align-self-center">
                <div className="section-head">
                    <h6 className="text-primary sub-title">درباره یارات</h6>
                    <h2 className="title">درباره یارات</h2>
                </div>
                <p>یارات موتورز، نامی نوظهور و پویا در صنعت خودروسازی ایران، با تمرکز بر طراحی و تولید خودروهای باگی
                    آفرود، به دنبال خلق تجربه‌ای متفاوت برای علاقه‌مندان به رانندگی ماجراجویانه است. ما در یارات موتورز
                    با بهره‌گیری از دانش فنی بومی، فناوری‌های نوین و طراحی‌های خلاقانه، محصولاتی ایمن، قدرتمند و متناسب
                    با نیازهای مشتریان ایرانی و منطقه‌ای ارائه می‌دهیم.</p>
                <AboutSlider/>
            </div>
        </div>
    )
}

export default About
