import React from 'react';
import Image from "next/image";

function CardBlogComponent() {
    return (
        <div className="bg-white shadow-2xl w-[350px] rounded-lg animate-in  hover:scale-105 zoom-in-0 duration-1000">
            <Image src="/assesst/img/blog.jpg"
                   width={350}
                   height={350}
                   alt="Picture of the author"
                   priority={true}
                   className="mx-auto object-cover"/>
            <div className="p-5 ">
                <div className="px-2 rounded-lg text-sm text-white font-light py-0.5 bg-primary w-fit">اطلاعات عمومی</div>
                <h6 className=" text-gray-400">1403/5/13</h6>
                <h2 className="text-2xl">
                    بهترین ماسک صورت ها در
                    2024 کدام هستند؟
                </h2>
                <p className=" text-gray-500">
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از  طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                </p>
            </div>
        </div>
    );
}

export default CardBlogComponent;
