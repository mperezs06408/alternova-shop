import './OrderButtons.scss'

function OrderButtons({children}){
    return (
        <li className="order__btns">
            {children}
        </li>
    )
}

export default OrderButtons;