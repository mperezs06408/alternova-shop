import DummyImg from '@assets/dummy_img.jpg';
import './ProductCard.scss'

function ProductCard({
    name,
    quantitySelected = () => '',
    buttons
}){
    return(
        <li
            className="product"
        >
            <img src={DummyImg} alt="Cart img for test" className="product__img" />
            <h2 className="product__name">{name}</h2>
            <p className="product__stock">{quantitySelected()}</p>
            {buttons()}
        </li>
    )
}

export default ProductCard