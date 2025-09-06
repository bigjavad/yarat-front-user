'use client'
import React from "react";
import {useFormik} from "formik";
import {ActionResault} from "@/shared/model/base/action-resault";
import {setUser} from "@/shared/redux/features";
import {Modal} from "react-bootstrap";
import InputComponent from "@/shared/component/input.component";
import ValidationErrorComponent from "@/shared/component/validationErrorComponent";
import {store} from "@/shared/redux/store";
import {OrdersDto} from "@/shared/model/dto/orders/orders.dto";
import {saveOrders} from "@/shared/service/orders/orders.service";
import {snackbarService} from "@/shared/service-ui/snackbar.service";
import {OrdersSchema} from "@/shared/validation/orders/login-schema";

interface ContactModalProps {
    isModal?: boolean;
    carId?: number;
    show: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({isModal = true, carId, onClose}) => {
    const user = store.getState().globalReducer.user;

    const handleClose = () => {
        onClose();
    };

    const formik = useFormik({
        initialValues: {
            phoneNumber: user?.phoneNumber || "",
            firstname: user?.firstname || "",
            lastname: user?.lastname || "",
            content: '',
        },
        validateOnMount: true,
        validationSchema: OrdersSchema,
        onSubmit: (values) => {
            saveOrders(fillModeOrders()).then((res: ActionResault<OrdersDto>) => {
                store.dispatch(setUser(fillModeOrders()));
                snackbarService.showSnackbar(res.message, 'success');
                if (isModal) {
                    handleClose();
                }
            });
        }
    });

    function fillModeOrders(): OrdersDto {
        let model: OrdersDto = new OrdersDto();
        model.content = formik.values.content;
        model.phoneNumber = formik.values.phoneNumber;
        model.firstname = formik.values.firstname;
        model.lastname = formik.values.lastname;
        model.carId = carId || null;
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
                                <ValidationErrorComponent msg={formik.errors.firstname.toLocaleString()}/>
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
                                <ValidationErrorComponent msg={formik.errors.lastname.toLocaleString()}/>
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
                            <ValidationErrorComponent msg={formik.errors.phoneNumber.toLocaleString()}/>
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
            <Modal show={true} onHide={handleClose} centered>
                <Modal.Body>{formContent}</Modal.Body>
            </Modal>
        );
    }

    return formContent;
};

export default ContactModal;
