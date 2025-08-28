import React from 'react';
import Image from "next/image";
import {ServicesDto} from "@/shared/model/dto/services/services.dto";
import Link from "next/link";
import {EN_form_menu_key} from "@/shared/enum/base/EN_formMenuKey";

function CardCategoryComponent({service}: { service: ServicesDto }) {
    return (
        <Link href={EN_form_menu_key.SERVICES+service.id}>
            <section
                className="relative animate-in fade-in-0 zoom-in-0  duration-700 bg-[#F5F5F5] overflow-hidden grid gap-2 rounded-xl shadow-2xl mx-auto max-w-[350px] w-full h-[350px]">
                <Image
                    src={service.image.file}
                    width={180}
                    height={180}
                    alt={service.title}
                    priority={true}
                    className="mx-auto my-auto"
                />
                <div
                    className="md:absolute transition-all w-full hover:bottom-0 h-44 bottom-0 md:-bottom-[85px] bg-blue-100 px-5 pt-10 rounded-tr-full rounded-tl-full">
                    <h2 className="text-3xl text-primary text-center mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-center px-10">{service.intro_text}</p>
                </div>
            </section>
        </Link>
    );
}

export default CardCategoryComponent;
