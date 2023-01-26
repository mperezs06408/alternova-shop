function Select({
    defaultLabel,
    name,
    handleChange,
    value,
    options = []
}){
    const onChange = (e) => {
        handleChange(e.target.value)
    }
    return(
        <select 
        className="select"
            name={name}
            onChange={onChange}
            value={value}
        >
            <option value=''>{defaultLabel}</option>
            {
                options.map(it => (
                    <option key={it} value={it}>{it}</option>
                ))
            }
        </select>
    )
}

export default Select