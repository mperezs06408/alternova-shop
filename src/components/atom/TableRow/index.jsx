function TableRow({
    name,
    quantity,
    unitPrice,
    totalPrice
}) {
    return(
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${unitPrice}</td>
            <td>${totalPrice}</td>
        </tr>
    )
}

export default TableRow;