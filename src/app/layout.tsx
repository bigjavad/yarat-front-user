'use client'
import './globals.css';
import localFont from 'next/font/local';
import '../assets/vendor/swiper/swiper-bundle.min.css'
import '../assets/vendor/switcher/switcher.css'
import "swiper/css/effect-fade";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import '../assets/css/style.css'
import Footer from "@/components/base/Footer";
import Header from "@/components/base/Header";
import {SnackbarProvider} from "notistack";
import React from "react";
import ContactModal from "@/components/contact-modal/contact-modal";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";


const bakh = localFont({
    src: [
        {
            path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-Thin.woff2',
            weight: '200'
        },
        {
            path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-Light.woff2',
            weight: '300'
        },
        {
            path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-Regular.woff2',
            weight: '400'
        },
        {
            path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-SemiBold.woff2',
            weight: '500'
        },
        {
            path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-Bold.woff2',
            weight: '600'
        },
        {
            path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-ExtraBold.woff2',
            weight: '700'
        },
    ],
    variable: '--font-bakh',
})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            className={`max-w-[1920px] mx-auto   ${bakh.variable}`}
            lang="fa" dir="rtl"
        >
        <title>یارات پلتفرم تولید باگی</title>
        <meta name="description" content="یارات پلتفرم تولید باگ‌های گروهی ۴، ۸ و ۱۲ نفره است."/>
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
        <body suppressHydrationWarning={true}>

        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
            <Header/>
            <article className="max-w-[1920px] mx-auto">{children}</article>
            {/*<ContactModal/>*/}
            <Footer/>
        </SnackbarProvider>
        </body>
        </html>
    );
}
