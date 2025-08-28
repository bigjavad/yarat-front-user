import React from 'react';
import Image from "next/image";

function ApplicationRegistrationProcessComponent() {
    const steps = [
        {
            step: "1",
            title: "ابتدا درخواست خود را با ثبت درخواست خود را ثبت نمایید. ",
            img: "/assesst/svg/svg-process-step-one.svg"
        },
        {
            step: "2",
            title: "اطلاعات فردی خود را وارد کنید و هزینه خدمات را پرداخت کنید.",
            img: "/assesst/svg/svg-process-step-two.svg"
        },
        {
            step: "3",
            title: "کارشناسان ما در اسرع وقت با شما تماس گرفته و پرستار را به محل اعزام می کنند.",
            img: "/assesst/svg/svg-process-step-three.svg"
        }
    ]
    return (
        <section className="w-full relative overflow-hidden md:py-20 py-10 bg-white md:px-0 px-5">
            <h2 className="text-4xl text-center">مراحل ثبت درخواست خدمات</h2>
                <div className="relative  max-w-[1200px] mx-auto mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <Image width={864} height={48} className="mx-auto" src="/assesst/svg/svg-process-line.svg"
                               alt="process-line"/>
                    </div>
                    <div
                        className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                        {
                            steps.map((item, key: number) => {
                                return <div key={key}
                                            className="relative md:border-none border-[1px] border-[#458FF6] rounded-3xl md:px-0 px-5">
                                    <div
                                        className="absolute -top-5 md:top-2 right-0 left-0 md:relative flex items-center justify-center w-12 h-12 mx-auto bg-[#458FF6] rounded-full">
                                        <div className=" text-xl font-semibold text-white">{item.step}</div>
                                    </div>
                                    <h3
                                        className="mt-10 mb-5 md:mb-0 leading-tight text-gray-600 font-medium">{item.title}</h3>
                                    <Image className="mx-auto" width={300} height={300} src={item.img}
                                           alt={item.title}/>
                                </div>
                            })
                        }
                    </div>
                </div>
        </section>
    );
}

export default ApplicationRegistrationProcessComponent;
