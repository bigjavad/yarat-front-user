import {EN_typeButton} from "@/shared/enum/base/EN_typeButton";
import {EN_buttonModeStyle} from "@/shared/enum/base/EN_buttonModeStyle";
import {EN_justify} from "@/shared/enum/base/EN_justify";
import {ReactElement} from "react";
import Link from "next/link";

type TYPE_ACTION_TYPE = 'submit' | 'reset' | 'button';

function PrimaryButtonComponent({
                                    title,
                                    fontSize = "16px",
                                    submit = () => {
                                    },
                                    hasPx = true,
                                    buttonModeStyle = EN_buttonModeStyle.STROKE,
                                    link = "",
                                    icon,
                                    justify = EN_justify.CENTER,
                                    hasRadius = true,
                                    fullWidth = false,
                                    type = EN_typeButton.PRIMARY,
                                    typeAction = "submit"
                                }: {
    typeAction?: TYPE_ACTION_TYPE;
    buttonModeStyle?: EN_buttonModeStyle;
    hasPx?: boolean;
    fontSize?: string;
    title: string;
    link?: any;
    icon?: ReactElement;
    justify?: EN_justify;
    hasRadius?: boolean;
    fullWidth?: boolean;
    type?: EN_typeButton;
    submit?: (submit: boolean) => void;
}) {

    const classStyle = `flex gap-2 ${fullWidth ? "w-full" :"w-fit"} ${hasPx ? "px-10" : "px-2"} flex justify-center items-center font-semibold ${hasRadius && "rounded-3xl"} transition-all py-2 border-2
          ${type == EN_typeButton.PRIMARY ? `${buttonModeStyle == EN_buttonModeStyle.STROKE ? 'hover:bg-primary bg-white hover:text-white border-[#407BFF] text-[#407BFF]' :
            'hover:bg-white bg-primary hover:text-primary hover:border-primary text-white'}` :
        EN_typeButton.ERROR ? "hover:bg-[#F64548] bg-white hover:text-white border-[#F64548] text-[#F64548]" :
            EN_typeButton.WARN && ""}
          `

    return (
        <div className="flex w-full" style={{fontSize: fontSize, justifyContent: justify}}>
            {
                link ?
                    <Link
                        className={classStyle}
                        href={link}>
                            <span>{icon}</span>
                            <span>{title}</span>
                    </Link> :
                    <button
                        onClick={() => {
                            submit(true)
                        }}
                        type={typeAction}
                        className={classStyle}>
                        <span>{icon}</span>
                        <span>{title}</span>
                    </button>

            }
        </div>

    );
}

export default PrimaryButtonComponent;
