import "./Input.scss";

function Input({
    name,
    placeholder,
    handleChange,
    value
}){

    const onChange = (e) => {
        handleChange(e.target.value)
    }

    return(
        <input
            className="input"
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}

export default Input;