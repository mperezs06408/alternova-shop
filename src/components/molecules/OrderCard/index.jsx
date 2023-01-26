import'./OrderCard.scss'

function OrderCard({
    totalProducts,
    totalOrderPrice,
    children
}) {
    return(
        <div
            className="orderCard"
        >
            <h2 className='orderCard__title'>Order resume:</h2>
                {children}
            <div className='orderCard__resume'>
                {!!totalProducts &&
                    <>
                        <p className='orderCard__label'><strong>Total products:</strong> {totalProducts}</p>
                        <p className='orderCard__label'><strong>Total order price:</strong> $ {totalOrderPrice}</p>
                    </>
                }{!totalProducts &&
                    <>
                        <p className='orderCard__label'><strong>Please select a product or products from our store to continue.</strong></p>
                    </>
                }
            </div>
        </div>
    )
}

export default OrderCard;