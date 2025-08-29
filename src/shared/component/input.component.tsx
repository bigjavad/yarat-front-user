import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    sizeClass?: string;
    fontClass?: string;
    rounded?: string;
    label?: string;
    error?: string;
    success?: string;
}

// eslint-disable-next-line react/display-name
const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            sizeClass = "",
            fontClass = "",
            rounded = "",
            children,
            type = "text",
            label,
            error,
            success,
            ...args
        },
        ref
    ) => {
        const baseClass = "form-control";
        let sizeClassBootstrap = "";
        if (sizeClass.includes("h-12") || sizeClass.includes("py-3")) {
            sizeClassBootstrap = "form-control-lg";
        } else if (sizeClass.includes("h-8") || sizeClass.includes("py-1")) {
            sizeClassBootstrap = "form-control-sm";
        }
        let roundedClass = rounded;
        if (rounded === "rounded-2xl") {
            roundedClass = "rounded-pill";
        } else if (rounded === "rounded-xl") {
            roundedClass = "rounded-3";
        } else if (rounded === "rounded-lg") {
            roundedClass = "rounded-2";
        }

        // مدیریت font
        let fontClassBootstrap = fontClass;
        if (fontClass.includes("text-sm")) {
            fontClassBootstrap = "fs-6";
        } else if (fontClass.includes("text-base")) {
            fontClassBootstrap = "fs-5";
        } else if (fontClass.includes("text-lg")) {
            fontClassBootstrap = "fs-4";
        }

        const inputClasses = [
            baseClass,
            sizeClassBootstrap,
            roundedClass,
            fontClassBootstrap,
            error ? "is-invalid" : "",
            success ? "is-valid" : "",
            className
        ].filter(Boolean).join(" ");

        return (
            <div className="mb-3">
                {label && (
                    <label className="form-label">
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    type={type}
                    className={inputClasses}
                    {...args}
                />

                {error && (
                    <div className="invalid-feedback">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="valid-feedback">
                        {success}
                    </div>
                )}

                {children}
            </div>
        );
    }
);

export default InputComponent;
