import {JSX} from "react";
import {currencyPipe} from "@/shared/pipe/currency-pipe";

interface CurrencyDisplayProps {
    value: number | string | null | undefined;
    currency?: string;
    className?: string;
    fallback?: string;
}

const CurrencyDisplay: ({value, currency, className, fallback}: {
    value: any;
    currency?: any;
    className?: any;
    fallback?: any
}) => JSX.Element = ({
                                                             value,
                                                             currency = 'تومان',
                                                             className = '',
                                                             fallback = '-'
                                                         }) => {
    const formatted = value !== null && value !== undefined
        ? currencyPipe.format(value, currency)
        : fallback;

    return <span className={className}>{formatted}</span>;
};

export default CurrencyDisplay;
