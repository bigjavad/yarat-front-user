
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/vendor/switcher/switcher.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import '../assets/css/style.css';
import React from 'react';
import NextTopLoader from "nextjs-toploader";
import {SnackbarProvider} from "notistack";
import ScrollTop from "@/constent/scroll-top";
import ContactButtonSide from "@/components/base/contact-button-side";

export default function ClientWrapper({children}: { children: React.ReactNode }) {
    return (
        <>
            <ScrollTop/>
            <ContactButtonSide/>

                <NextTopLoader
                    color="#EE3131"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #EE3131,0 0 5px #EE3131"
                    zIndex={1600}
                    showAtBottom={false}
                />
                {children}
        </>
    );
}
