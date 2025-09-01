export const currencyPipe = {
    format: (value: number | string | null | undefined, currency: string = 'تومان'): string => {
        if (value === null || value === undefined || value === '') return '-';

        const num = typeof value === 'string' ? parseFloat(value) : value;

        if (isNaN(num)) return 'عدد نامعتبر';

        const formatted = new Intl.NumberFormat('fa-IR').format(num);

        return currency ? `${formatted} ${currency}` : formatted;
    },

    formatNumber: (value: number | string | null | undefined): string => {
        if (value === null || value === undefined || value === '') return '-';

        const num = typeof value === 'string' ? parseFloat(value) : value;

        if (isNaN(num)) return 'عدد نامعتبر';

        return new Intl.NumberFormat('fa-IR').format(num);
    },

    toEnglishNumber: (persianNumber: string): number => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        let result = persianNumber;

        persianDigits.forEach((persianDigit, index) => {
            const regex = new RegExp(persianDigit, 'g');
            result = result.replace(regex, englishDigits[index]);
        });

        result = result.replace(/[^\d.-]/g, '');

        return parseFloat(result) || 0;
    },

    toPersianNumber: (englishNumber: number | string): string => {
        const num = typeof englishNumber === 'string' ? englishNumber : englishNumber.toString();

        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

        let result = num;

        englishDigits.forEach((englishDigit, index) => {
            const regex = new RegExp(englishDigit, 'g');
            result = result.replace(regex, persianDigits[index]);
        });

        return result;
    }
};

export const useCurrency = () => currencyPipe;
