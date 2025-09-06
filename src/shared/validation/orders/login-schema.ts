import * as Yup from 'yup';
import {TRANSLATE_WITH_LABEL, VALIDATION_ERROR_TYPES} from "@/shared/validation/validation-translate";
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const OrdersSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .label('شماره موبایل')
        .matches(phoneRegExp, (value) =>
            TRANSLATE_WITH_LABEL(value.label, VALIDATION_ERROR_TYPES.FORMAT),
        )
        .min(11, (value) =>
            TRANSLATE_WITH_LABEL(value.label, VALIDATION_ERROR_TYPES.MIN, 11),
        )
        .max(11, (value) =>
            TRANSLATE_WITH_LABEL(value.label, VALIDATION_ERROR_TYPES.MAX, 11),
        )
        .required((value) =>
            TRANSLATE_WITH_LABEL(
                value.label,
                VALIDATION_ERROR_TYPES.REQUIRED_WRITE,
            ),
        ),
});
