import DummyImg from '@assets/dummy_img.jpg';
import './ProductCard.scss'

function ProductCard({
    name,
    stock,
    price,
    quantitySelected = () => '',
    buttons
}){
    
    return(
        <li
            className="product"
        >
            <img src={DummyImg} alt="Cart img for test" className="product__img" />
            <div className='product__stock'>On stock: {stock}</div>
            <div className='product__price'>${price}</div>
            <h2 className="product__name">{name}</h2>
            <p className="product__quantity">{quantitySelected()}</p>
            {buttons()}
        </li>
    )
}

export default ProductCard