import './globals.css';
import localFont from 'next/font/local';
import Footer from "@/components/base/footer";
import Header from "@/components/base/header";
import ClientWrapper from "@/app/client-wrapper";

const bakh = localFont({
    src: [
        {path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-Thin.woff2', weight: '200'},
        {path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-Light.woff2', weight: '300'},
        {path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-Regular.woff2', weight: '400'},
        {path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-SemiBold.woff2', weight: '500'},
        {path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-Bold.woff2', weight: '600'},
        {path: './../font/bakh/webfonts/woff2/YekanBakhFaNum-ExtraBold.woff2', weight: '700'},
    ],
    variable: '--font-bakh',
});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html className={`max-w-[1920px] mx-auto ${bakh.variable}`} lang="fa" dir="rtl">
        <head>
            <title>یارات پلتفرم تولید باگی</title>
            <meta name="description" content="یارات پلتفرم تولید باگ‌های گروهی ۴، ۸ و ۱۲ نفره است."/>
        </head>
        <body suppressHydrationWarning={true}>
        <Header/>
        <ClientWrapper>
            <article className="max-w-[1920px] mx-auto">{children}</article>
        </ClientWrapper>
        <Footer/>
        </body>
        </html>
    );
}
