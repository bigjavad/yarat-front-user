"use client"
import React, {useState} from 'react';
import {store} from "@/shared/redux/store";
import {saveOrders} from "@/shared/service/orders/orders.service";
import {snackbarService} from "@/shared/service-ui/snackbar.service";
import ContactModal from "@/components/contact-modal/contact-modal";

function ContactButtonSide() {
    const user = store.getState().globalReducer.user;
    const [modal, setModal] = useState<boolean>(false);

    function onSubmit(){
        if (user){
            saveOrders().then(res=>{
                snackbarService.showSnackbar(res.message, 'success');
            })
        }else{
          setModal(true)
        }
    }

    return (
        <div className="fixed-bottom d-md-none bg-gray p-3 h-10 d-flex shadow-lg">
            <div className="d-flex gap-3">
                <p className="text-primary font-10 w-50 my-auto">جهت اطلاع از جزئیات محصولات با ثبت درخواست با ما در ارتباط باشید.</p>
                <button onClick={onSubmit} type="submit"
                        className="btn btn-border justify-content-center d-flex w-50 shadow-primary btn-primary" id="submit">
                    ثبت درخواست
                </button>
            </div>
            {
                modal && (<ContactModal
                    isModal={true}
                    onClose={() => setModal(false)}
                />)
            }
        </div>
    );
}

export default ContactButtonSide;
