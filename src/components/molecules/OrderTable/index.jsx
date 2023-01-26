function OrderTable({
    totalOrderPrice,
    children
}) {
    return(
        <table
            className="table"
        >
            <thead className="table__header">
                <tr>
                    <td>Product name</td>
                    <td>Quantity</td>
                    <td>Unit price</td>
                    <td>Total price</td>
                </tr>
            </thead>
            <tbody className="table__body">
                {children}
                {/* {!children && <div className="table__body--empty">Empty cart</div>} */}
                <tr>
                    <td></td>
                    <td></td>
                    <td className="table__total">Total Order Price:</td>
                    <td>${totalOrderPrice}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default OrderTable;