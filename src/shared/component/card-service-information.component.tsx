import React from 'react';
import PrimaryButtonComponent from "@/shared/component/primary-button.component";
import {ServicePriceDto} from "@/shared/model/dto/services/service-price.dto";

function CardServiceInformationComponent({price,params,slugContent}:{price:ServicePriceDto,params:string,slugContent:string}) {


    return (
        <div className="bg-white px-10 md:px-5 py-10 shadow-lg rounded-lg md:w-[400px] mx-auto animate-in  hover:scale-105 zoom-in-0 duration-1000">
            <div className="w-fit md:w-[250px] mx-auto text-center">
                <h2 className="border-b-4 text-4xl text-gray-600 pb-2 mb-4 font-light">{price.title}</h2>
                <div className="flex text-[#458DFC] items-center font-medium">
                    <span className="text-7xl">{price.price.substring(0,3)}</span>
                    <span className="text-4xl">هزار تومان</span>
                </div>
                <div className="text-gray-500 my-5 grid gap-2">
                    <div className="border-b-4 text-xl pb-2" dangerouslySetInnerHTML={{__html: price.intro_text}} />
                    <div dangerouslySetInnerHTML={{__html: price.body}} className="border-b-4 text-gray-500 pb-2" />
                </div>
                <div>
                    <PrimaryButtonComponent
                        link={{
                            query: { modal: "true", content: slugContent },
                        }}
                        fullWidth={true}
                        hasRadius={false}
                        title="ثبت درخواست"
                    />
                </div>
            </div>
        </div>
    );
}

export default CardServiceInformationComponent;
