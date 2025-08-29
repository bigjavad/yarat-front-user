import React from 'react';
import CarListingBanner from "@/element/car-listing-banner";
import {IMAGE} from "@/constent/theme";
import ContectForm from "@/element/ContectForm";
import Testimonial from "@/components/Testimonial";

function Page() {
    return (
        <div>
            <div className="page-content bg-white">
                <CarListingBanner img={IMAGE.bnr1} title={'تجربه مشتریان'}/>
                <div className="section-full bg-gray content-inner-1" id="client">
                    <div className="container">
                        <div className="section-head text-center wow fadeIn" data-wow-duration="2s"
                             data-wow-delay="0.2s">
                            <h2 className="title">نظر مشتریان ما</h2>
                            <p>مشتریان ما درباره یارات موتور چه می‌گویند؟ از تجربه رانندگی در مسیرهای سخت کویری گرفته تا
                                کیفیت بی‌نظیر باگی‌ها و خدمات پس از فروش، هر بازخوردی برای ما ارزشمند است. اینجا
                                می‌توانید نظر واقعی افرادی که با یارات موتور ماجراجویی کرده‌اند، بخوانید و با اطمینان
                                انتخاب کنید.</p>
                        </div>
                        <Testimonial/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;
