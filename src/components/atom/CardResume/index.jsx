import './CardResume.scss';

function CardResume({
    name,
    quantity,
    unitPrice,
    totalPrice
}) {
    return(
        <ul className="cardResume">
            <li className="cardResume__label"><strong>Product:</strong> {name}</li>
            <li className="cardResume__label"><strong>Quantity:</strong> {quantity}</li>
            <li className="cardResume__label"><strong>Unit price:</strong> ${unitPrice}</li>
            <li className="cardResume__label"><strong>Total by product:</strong> ${totalPrice}</li>
        </ul>
    )
}

export default CardResume;