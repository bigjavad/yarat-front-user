import moment from "jalali-moment";


export const jalaliPipe = {
    toJalali: (date: Date | string | null | undefined, format: string = 'jYYYY/jMM/jDD'): string => {
        if (!date) return '-';
        return moment(date).format(format);
    },

    fromJalali: (jalaliDate: string, format: string = 'jYYYY/jMM/jDD'): Date => {
        return moment(jalaliDate, format).toDate();
    },

    now: (format: string = 'jYYYY/jMM/jDD'): string => {
        return moment().format(format);
    },

    fromNow: (date: Date | string | null | undefined): string => {
        if (!date) return '-';
        return moment(date).fromNow();
    },

    formats: {
        full: 'jYYYY/jMM/jDD HH:mm:ss',
        date: 'jYYYY/jMM/jDD',
        time: 'HH:mm:ss',
        short: 'jYY/jMM/jDD'
    }
};

export const useJalali = () => jalaliPipe;
