import './Button.css'
type Props = {
    title?: any,
    onClick?: any,
    className?: any,
    leftIcon?: any,
    rightIcon?: any,
    leftIconClass?: any,
    rightIconClass?: any,
    backgroundColor?: any,
    color?: any,
    border?: any,
    disable?: any,
    type?: any,
    mainClass?: any
}
const Button = (props: Props) => {
    const { title, onClick, className, leftIcon, rightIcon, leftIconClass, rightIconClass, backgroundColor, color, border, disable, type = "button", mainClass } = props
    const btnStyle = {
        height: '35px !import',
        background: backgroundColor,
        color: color,
        border: border,
    }
    return (
        <div className={"flex " + mainClass}>
            <button className={`custom-btn btn-2 normal-case px-4 disabled:bg-[#585858] disabled:opacity-50 disabled:cursor-not-allowed ${className}`} type={type} onClick={onClick} style={{ ...btnStyle }} disabled={disable}>
                {leftIcon && <div className={`${leftIconClass}`}>{leftIcon}</div>}
                {title}
                {rightIcon && <div className={`${rightIconClass}`}>{rightIcon}</div>}
            </button>
        </div>
    )
}

export default Button
