function Button({
    label,
    handleClick,
    type = 'button',
    disabled = false
}){
    return(
        <button
            onClick={handleClick}
            type={type}
            disabled={disabled}
        >{label}</button>
    )
}

export default Button;