"use client"
import React, {useState} from 'react';
import ContactModal from "@/components/contact-modal/contact-modal";
import {SnackbarProvider} from "notistack";

function ContactButtonSide() {
    const [modal, setModal] = useState<boolean>(false);

    function onSubmit() {
            setModal(true)
    }

    return (
        <SnackbarProvider>
        <div className="fixed-bottom bg-gray p-3 h-10 d-flex shadow-lg">
            <div className="d-flex gap-3 w-100 justify-content-between">
                <p className="text-primary fs-6 d-md-flex d-none w-50 my-auto">جهت اطلاع از جزئیات محصولات با ثبت
                    درخواست با ما در ارتباط باشید.</p>
                <p className="text-primary font-10 d-md-none d-flex w-50 my-auto">جهت اطلاع از جزئیات محصولات با ثبت
                    درخواست با ما در ارتباط باشید.</p>
                <button onClick={onSubmit} type="submit"
                        className="btn btn-border max-w300 justify-content-center d-flex w-50 shadow-primary btn-primary"
                        id="submit">
                    مشاوره خرید
                </button>
            </div>
            {
                modal && (<ContactModal
                    isModal={true}
                    onClose={() => setModal(false)}
                 show={true}/>)
            }
        </div>
        </SnackbarProvider>
    );
}

export default ContactButtonSide;
