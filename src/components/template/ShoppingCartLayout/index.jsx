function ShoppingCartLayout({buttons, children}) {
    return(
        <div className='cart'>
            <h1 className='cart__title'>Cart</h1>
            {children}
            <div className='cart__btn'>
                {buttons}
            </div>
        </div>
    )
}

export default ShoppingCartLayout;