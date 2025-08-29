'use client'
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useFormik} from "formik";
import {EN_LoginStateEnum} from "@/shared/enum/form/EN_LoginState.enum";
import {LoginSchema} from "@/shared/validation/schema/login-schema";
import {ActionResault} from "@/shared/model/base/action-resault";
import {LoginDto} from "@/shared/model/dto/auth/login.dto";
import {setUser} from "@/shared/redux/features";
import {loginService, registerService} from "@/shared/service/login/login.service";
import {Modal} from "react-bootstrap";
import InputComponent from "@/shared/component/input.component";
import OtpInput from 'react-otp-input';
import ValidationErrorComponent from "@/shared/component/validationErrorComponent";
import {store} from "@/shared/redux/store";

const LoginModal = () => {
    const [show, setShow] = useState(false);
    const [loginState, setLoginState] = useState(EN_LoginStateEnum.LOGIN);
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const hasSeenModal = sessionStorage.getItem('hasSeenLoginModal');
        if (!isLoggedIn && !hasSeenModal) {
            setShow(true);
            sessionStorage.setItem('hasSeenLoginModal', 'true');
        }
    }, []);

    const handleClose = () => setShow(false);

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            code: '',
            firstname: '',
            lastname: ''
        },
        validateOnMount: true,
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            if (loginState === EN_LoginStateEnum.LOGIN) {
                loginService(fillModel()).then((res: ActionResault<LoginDto>) => {
                    setLoginState(EN_LoginStateEnum.REGISTER_CODE);
                })
            } else {
                registerService(fillModelValidCode()).then((res: ActionResault<LoginDto>) => {
                    store.dispatch(setUser(res.data));
                    localStorage.setItem('isLoggedIn', 'true');
                    handleClose();
                    router.push('/');
                })
            }
        }
    });

    function fillModel(): LoginDto {
        let model: LoginDto = new LoginDto();
        model.phoneNumber = formik.values.phoneNumber;
        return model;
    }

    function fillModelValidCode(): LoginDto {
        let model: LoginDto = new LoginDto();
        model.code = Number(formik.values.code);
        model.phoneNumber = formik.values.phoneNumber;
        model.firstname = formik.values.firstname;
        model.lastname = formik.values.lastname;
        return model;
    }

    return (
        <Modal show={show} onHide={handleClose} centered size="md">
            <Modal.Header closeButton>
                <Modal.Title>ورود</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* لوگو */}
                <div className="d-flex align-items-center justify-content-center gap-3 w-25 mx-auto mb-4">
                    {/* جای لوگو */}
                </div>

                {/* جداکننده */}
                <div className="my-4 border-bottom text-center position-relative">
                    <span
                        className="position-absolute px-2 bg-white text-muted small fw-medium"
                        style={{top: "-12px", left: "50%", transform: "translateX(-50%)"}}
                    >
                        ورود
                    </span>
                </div>

                <form className="row g-3">
                    {loginState === EN_LoginStateEnum.LOGIN ? (
                        <>
                            <div className="row g-2 mt-1">
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

                            <div className="mt-3">
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
                        </>
                    ) : (
                        <div className="w-100 text-center mt-5" dir="ltr">
                            <div className="mb-3">کد تأیید را وارد کنید</div>
                            <OtpInput
                                value={formik.values.code}
                                onChange={(value: string) => formik.setFieldValue('code', value)}
                                numInputs={6}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) =>
                                    <input {...props} className="form-control d-inline-block text-center"/>}
                                inputStyle={{
                                    width: "100%",
                                    height: "3rem",
                                    margin: "0 0.5rem",
                                    fontSize: "1.5rem",
                                }}
                            />
                        </div>
                    )}

                    <div className="d-grid mt-5">
                        <button
                            className="btn btn-primary px-4 d-flex justify-content-center mx-auto"
                            onClick={formik.submitForm}
                            type="button"
                            disabled={loginState === EN_LoginStateEnum.LOGIN ? !formik.isValid : formik.values.code.length !== 5}
                        >
                            {loginState === EN_LoginStateEnum.LOGIN ? 'ارسال کد تأیید' : 'تأیید و ورود'}
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
