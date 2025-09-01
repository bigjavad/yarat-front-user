import {jalaliPipe} from "@/shared/pipe/jalali-pipe";
import {JSX} from "react";

interface JalaliDateProps {
    date: Date | string | null | undefined;
    format?: string;
    className?: string;
    fallback?: string;
}

const JalaliDate: ({date, format, className, fallback}: {
    date: any;
    format?: any;
    className?: any;
    fallback?: any
}) => JSX.Element = ({
                                                   date,
                                                   format = 'jYYYY/jMM/jDD',
                                                   className = '',
                                                   fallback = '-'
                                               }) => {
    const jalaliDate = date ? jalaliPipe.toJalali(date, format) : fallback;

    return <span className={className}>{jalaliDate}</span>;
};

export default JalaliDate;
