import Layout from '@template/Layout'

function ProductStoreLayout({children}) {
    return(
        <Layout>
            <div className='store'>
                <h1 className='store__title'>Shopping store</h1>
                { children }
            </div>
        </Layout>
    )
}

export default ProductStoreLayout;