export const TRANSLATE_TYPES = {
    REQUIRED: ' اجباری است ',
    NATIONAL_ID: ' کد ملی صحیح نمی‌باشد ',
    MOBILE: 'شماره موبایل صحیح وارد شود',
    PHONE: 'شماره تلفن صحیح وارد شود',
    2: '2',
    4: '4',
    3: '3',
    5: '5',
    10: '10',
    11: '11',
    6: '6',
    50: '50',
    151: '151',
};

export const VALIDATION_ERROR_TYPES = {
    MIN: 'MIN' as const,
    MAX: 'MAX' as const,
    FORMAT: 'FORMAT' as const,
    REQUIRED_CHOOSE: 'REQUIRED_CHOOSE' as const,
    REQUIRED_WRITE: 'REQUIRED_WRITE' as const,
};

export const TRANSLATE_WITH_LABEL = (
    label: string,
    validationError: keyof typeof VALIDATION_ERROR_TYPES,
    translateType?: keyof typeof TRANSLATE_TYPES,
) => {
    if (translateType) {
        if (validationError === VALIDATION_ERROR_TYPES.MIN) {
            return `${label}  حداقل شامل ${TRANSLATE_TYPES[translateType]} کاراکتر باشد.
`;
        }
        if (validationError === VALIDATION_ERROR_TYPES.MAX) {
            return `${label}  حداکثر شامل ${TRANSLATE_TYPES[translateType]} کاراکتر باشد.
`;
        }
    }
    if (validationError === VALIDATION_ERROR_TYPES.FORMAT) {
        return `فرمت اطلاعات ورودی معتبر نیست.`;
    }
    if (validationError === VALIDATION_ERROR_TYPES.REQUIRED_WRITE) {
        return `لطفا  ${label} را وارد کنید.
`;
    }
    if (validationError === VALIDATION_ERROR_TYPES.REQUIRED_CHOOSE) {
        return `لطفا  ${label} را انتخاب کنید.
`;
    }
};
