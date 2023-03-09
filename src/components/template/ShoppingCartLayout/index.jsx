import Layout from "@template/Layout";

function ShoppingCartLayout({buttons, children}) {
    return(
        <Layout>
            <div className='cart'>
                <h1 className='cart__title'>Cart</h1>
                {children}
                <div className='cart__btn'>
                    {buttons}
                </div>
            </div>
        </Layout>
    )
}

export default ShoppingCartLayout;