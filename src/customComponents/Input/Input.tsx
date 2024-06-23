import { useEffect, useState } from "react";
type Props = {
    labelTitle?: any,
    labelStyle?: any,
    type?: any,
    containerStyle?: any,
    defaultValue?: any,
    placeholder?: any,
    onChange?: any,
    name?: any,
    onKeyDown?: any,
    required?: any,
    inputClass?: any,
    disabled?: any,
    min?: any,
    max?: any,
    Id?: any,
    autoComplete?: any,
    onBlur?: any,
    pattern?: any,
    title?: any
}

function InputText(props: Props) {
    const {
        labelTitle,
        labelStyle,
        type,
        containerStyle,
        defaultValue,
        placeholder,
        onChange,
        name,
        onKeyDown,
        required,
        inputClass,
        disabled,
        min,
        max,
        Id,
        autoComplete = "off",
        onBlur,
        pattern,
        title
    } = props
    const inputClassName = `disabled:cursor-not-allowed disabled:bg-[#e5e7eba8] disabled:opacity-75 outline-none text-xs leading-[14px] h-[35px] block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-[#e0ecfb1f] 
  focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ${inputClass} `;
//   required:border-red-500 invalid:border-red-500 
    const [value, setValue] = useState(defaultValue);

    const updateInputValue = (val: string) => {
        setValue(val);
    };
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            {labelTitle && (
                <label className="label py-0 font-medium text-sm">
                    <span className={"label-text text-base-content " + labelStyle}>
                        {labelTitle}
                        {required && <span className="text-red-600">*</span>}
                    </span>
                </label>
            )}
            <input
                onBlur={(e) => {
                    onBlur && onBlur(e)
                }}
                autoComplete={autoComplete}
                type={type || "text"}
                value={value}
                name={name}
                placeholder={placeholder || ""}
                required={required}
                disabled={disabled}
                onKeyDown={(e) => {
                    onKeyDown && onKeyDown(e);
                }}
                onChange={(e) => {
                    updateInputValue && updateInputValue(e.target.value);
                    onChange && onChange(e);
                }}
                className={`${inputClassName}`}
                min={min}
                max={max}
                id={Id}
                pattern={pattern}
                title={title || defaultValue}
            />
        </div>
    );
}

export default InputText;
