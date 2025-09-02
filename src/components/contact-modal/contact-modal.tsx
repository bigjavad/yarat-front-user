'use client'
import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {EN_LoginStateEnum} from "@/shared/enum/form/EN_LoginState.enum";
import {LoginSchema} from "@/shared/validation/schema/login-schema";
import {ActionResault} from "@/shared/model/base/action-resault";
import {LoginDto} from "@/shared/model/dto/auth/login.dto";
import {setUser} from "@/shared/redux/features";
import {loginService, verifyService} from "@/shared/service/login/login.service";
import {Modal} from "react-bootstrap";
import InputComponent from "@/shared/component/input.component";
import OtpInput from 'react-otp-input';
import ValidationErrorComponent from "@/shared/component/validationErrorComponent";
import {store} from "@/shared/redux/store";
import {OrdersDto} from "@/shared/model/dto/orders/orders.dto";
import {saveOrders} from "@/shared/service/orders/orders.service";
import Image from "next/image";
import {snackbarService} from "@/shared/service-ui/snackbar.service";

interface ContactModalProps {
    isModal?: boolean;
    carId?: number;
}

const ContactModal: React.FC<ContactModalProps> = ({isModal = true, carId}) => {
    const [show, setShow] = useState(false);
    const user = store.getState().globalReducer.user;

    useEffect(() => {
        if (!user && isModal) {
            setShow(true);
        }
        if (user) {
            formik.setErrors({
                firstname: user.firstname,
                lastname: user.lastname,
                phoneNumber: user.phoneNumber
            })
        }
    }, [user, isModal]);

    const handleClose = () => setShow(false);

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            firstname: '',
            lastname: '',
            content: '',
        },
        validateOnMount: true,
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            loginService(fillModel()).then((res: ActionResault<LoginDto>) => {
                store.dispatch(setUser(res.data));
                saveOrders(fillModeOrders()).then((res: ActionResault<OrdersDto>) => {
                    snackbarService.showSnackbar(res.message, 'success');
                });
                if (isModal) {
                    handleClose();
                }
            });
        }
    });

    function fillModeOrders(): OrdersDto {
        let model: OrdersDto = new OrdersDto();
        model.content = formik.values.content;
        model.carId = carId || null;
        return model;
    }

    function fillModel(): LoginDto {
        let model: LoginDto = new LoginDto();
        model.phoneNumber = formik.values.phoneNumber;
        model.firstname = formik.values.firstname;
        model.lastname = formik.values.lastname;
        return model;
    }

    const formContent = (
        <section className={`p-4 max-w500 ${!isModal && 'contact-area1'}`}>
            {isModal && (
                <div className="mb-3">
                    <h5>تماس با ما</h5>
                </div>
            )}
            <form>
                <>
                    <div className="d-flex gap-2 w-100">
                        <div className="col-sm-6">
                            <label className="form-label">نام</label>
                            <InputComponent
                                type="text"
                                name="firstname"
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                placeholder="نام خود را وارد کنید"
                                className="form-control"
                            />
                            {formik.errors.firstname && (formik.submitCount > 0 || formik.touched) && (
                                <ValidationErrorComponent msg={formik.errors.firstname}/>
                            )}
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label">نام خانوادگی</label>
                            <InputComponent
                                type="text"
                                name="lastname"
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                placeholder="نام خانوادگی خود را وارد کنید"
                                className="form-control"
                            />
                            {formik.errors.lastname && (formik.submitCount > 0 || formik.touched) && (
                                <ValidationErrorComponent msg={formik.errors.lastname}/>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="form-label">شماره تلفن</label>
                        <InputComponent
                            type="text"
                            maxLength={11}
                            minLength={11}
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            placeholder="شماره تلفن همراه خود را وارد کنید"
                            className="form-control"
                        />
                        {formik.errors.phoneNumber && (formik.submitCount > 0 || formik.touched) && (
                            <ValidationErrorComponent msg={formik.errors.phoneNumber}/>
                        )}
                    </div>
                    <div className="form-group mt-3">
                        <label>توضیحات (اختیاری)</label>
                        <div className="input-group">
                                <textarea
                                    name="content"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    placeholder="توضیحات خود را بنویسید"
                                    className="form-control"
                                ></textarea>
                        </div>
                    </div>
                </>

                <div className="d-grid mt-3">
                    <button
                        className="btn btn-primary px-4 d-flex justify-content-center mx-auto w-100"
                        onClick={formik.submitForm}
                        type="button"
                        disabled={!formik.isValid}
                    >ثبت درخواست
                    </button>
                </div>
            </form>
        </section>
    );

    if (isModal) {
        return (
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>{formContent}</Modal.Body>
            </Modal>
        );
    }

    return formContent;
};

export default ContactModal;
