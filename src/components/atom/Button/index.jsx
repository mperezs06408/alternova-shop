import "./Button.scss"

function Button({
    label,
    handleClick,
    type = 'button',
    disabled = false,
    aditionalClasses = ''
}){
    return(
        <button
            onClick={handleClick}
            type={type}
            disabled={disabled}
            className={aditionalClasses}
        >{label}</button>
    )
}

export default Button;