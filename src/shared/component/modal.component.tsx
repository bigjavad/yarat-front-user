'use client'
import React, {ReactElement} from "react";
import {IoCloseOutline} from "react-icons/io5";
import Link from "next/link";
import useMobile from "@/shared/hook/use-mobile";

interface ModalComponentProps {
    contentKey: string;
    closeUrl: string;
    width:string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ content, closeUrl,width }) => {
    const isMobile = useMobile();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <Link className="absolute z-10 w-full h-full top-0" href={closeUrl}></Link>
            <div
                style={{ width: !isMobile ? width : "100%" }}
                className="relative md:h-fit h-screen z-50 bg-white overflow-hidden rounded-lg shadow-lg"
            >
                <div
                    style={{ width: !isMobile ? width : "100%" }}
                    className="flex fixed z-20 bg-primary text-white p-5"
                >
                    <div className="w-10/12 md:w-11/12">
                        <div className="overflow-hidden whitespace-nowrap">
                            <p className="inline-block animate-marquee md:text-md text-sm">
                                مامانا، همراهی مطمئن برای خدمات پزشکی در خانه، با آرامش در کنار شما ایستاده است.
                            </p>
                        </div>
                    </div>
                    <div className="w-2/12 md:1/12 flex justify-center">
                        <Link href={closeUrl}>
                            <IoCloseOutline size={28} />
                        </Link>
                    </div>
                </div>
                <div className="px-5 z-10 max-h-screen overflow-y-auto pt-10">{content}</div>
            </div>
        </div>
    );
};

export default ModalComponent;
