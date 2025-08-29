'use client'
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation"; // اصلاح شده
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
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>ورود به سیستم</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="flex items-center justify-center gap-5 w-32 mx-auto mb-4">
                    {/* لوگوهای شما */}
                </div>

                <div className="my-4 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white dark:bg-neutral-900 transform translate-y-1/2">
                        ورود
                    </div>
                </div>

                <form className="grid grid-cols-1 gap-3">
                    {
                        loginState == EN_LoginStateEnum.LOGIN ?
                            <div>
                                <div className="grid sm:grid-cols-2 gap-2 mt-1">
                                    <label className="block">
                                        <span className="text-neutral-800 dark:text-neutral-200">
                                            نام
                                        </span>
                                        <InputComponent
                                            type="text"
                                            name="firstname"
                                            value={formik.values.firstname}
                                            onChange={formik.handleChange}
                                            placeholder="نام خود را وارد کنید"
                                        />
                                        {formik.errors.firstname && (formik.submitCount > 0 || formik.touched) && (
                                            <ValidationErrorComponent msg={formik.errors.firstname}/>
                                        )}
                                    </label>
                                    <label className="block">
                                        <span className="text-neutral-800 dark:text-neutral-200">
                                            نام خانوادگی
                                        </span>
                                        <InputComponent
                                            type="text"
                                            name="lastname"
                                            value={formik.values.lastname}
                                            onChange={formik.handleChange}
                                            placeholder="نام خانوادگی خود را وارد کنید"
                                        />
                                        {formik.errors.lastname && (formik.submitCount > 0 || formik.touched) && (
                                            <ValidationErrorComponent msg={formik.errors.lastname}/>
                                        )}
                                    </label>
                                </div>
                                <label className="block mt-3">
                                    <span className="text-neutral-800 dark:text-neutral-200">
                                        شماره تلفن
                                    </span>
                                    <InputComponent
                                        type="text"
                                        maxLength={11}
                                        minLength={11}
                                        name="phoneNumber"
                                        value={formik.values.phoneNumber}
                                        onChange={formik.handleChange}
                                        placeholder="شماره تلفن همراه خود را وارد کنید"
                                        className="mt-1"
                                    />
                                    {formik.errors.phoneNumber && (formik.submitCount > 0 || formik.touched) && (
                                        <ValidationErrorComponent msg={formik.errors.phoneNumber}/>
                                    )}
                                </label>
                            </div> :
                            <div className="w-full flex justify-center" dir="ltr">
                                <div className="text-center mb-3">کد تأیید را وارد کنید</div>
                                <OtpInput
                                    value={formik.values.code}
                                    onChange={(value: string) => formik.setFieldValue('code', value)}
                                    numInputs={5}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props} />}
                                    inputStyle={{
                                        width: '3rem',
                                        height: '3rem',
                                        margin: '0 0.5rem',
                                        fontSize: '1.5rem',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                    }}
                                />
                            </div>
                    }

                    <button
                        className="btn btn-primary w-100 mt-3"
                        onClick={formik.submitForm}
                        type="button"
                        disabled={loginState == EN_LoginStateEnum.LOGIN ? !formik.isValid : formik.values.code.length !== 5}
                    >
                        {loginState === EN_LoginStateEnum.LOGIN ? 'ارسال کد تأیید' : 'تأیید و ورود'}
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
