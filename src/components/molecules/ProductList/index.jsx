import './ProductList.scss'

function ProductList({children}){
    return (
        <ul
            className="products"
        >
            {children}
        </ul>
    )
}

export default ProductList