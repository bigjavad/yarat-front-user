'use client'
import React from 'react';
import Link from "next/link";
import {serviceBreadcrumbs} from "@/shared/const/breadcrumbs.const";
import {BreadcrumbsVm} from "@/shared/model/vm/breadcrumbs.vm";
import {usePathname} from "next/navigation";

function BreadcrumbsComponent({breadcrumbs,title}: { breadcrumbs:BreadcrumbsVm[],title:string }) {
    const pathname = usePathname();
    const breadcrumbsList:BreadcrumbsVm[]=[...breadcrumbs,{title:title,link:pathname}]
    return (
        <div className="breadcrumbs px-10 bg-primary text-white font-medium">
            <ul>
                {
                    breadcrumbsList.map((item:BreadcrumbsVm,key:number)=>{
                        return <li key={key}><Link href={item.link}>{item.title}</Link></li>
                    })
                }
            </ul>
        </div>
    );
}

export default BreadcrumbsComponent;
