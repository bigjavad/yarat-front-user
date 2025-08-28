import './globals.css';
import localFont from 'next/font/local';
import '../assets/vendor/swiper/swiper-bundle.min.css'
import '../assets/vendor/switcher/switcher.css'
import "swiper/css/effect-fade";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import '../assets/css/style.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const avinyFont = localFont({
    src: [
        {
            path: './../font/aviny/aviny.ttf',
            weight: '400',
        },
    ],
    variable: '--font-aviny',
});

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
            className={`max-w-[1920px] mx-auto ${avinyFont.variable} ${bakh.variable}`}
            lang="fa" dir="rtl"
         >
  {/*      <NextTopLoader*/}
  {/*          color="#2299DD"*/}
  {/*          initialPosition={0.08}*/}
  {/*          crawlSpeed={200}*/}
  {/*          height={3}*/}
  {/*          crawl={true}*/}
  {/*          showSpinner={true}*/}
  {/*          easing="ease"*/}
  {/*          speed={200}*/}
  {/*          shadow="0 0 10px #2299DD,0 0 5px #2299DD"*/}
  {/*          template='<div class="bar" role="bar"><div class="peg"></div></div>*/}
  {/*<div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'*/}
  {/*          zIndex={1600}*/}
  {/*          showAtBottom={false}*/}
  {/*      />*/}
        <body suppressHydrationWarning={true}>
        <Header />
        {/*<HeaderComponent/>*/}
        <article className="max-w-[1920px] mx-auto">{children}</article>
        {/*<FooterComponent/>*/}
        <Footer/>
        </body>
        </html>
    );
}
