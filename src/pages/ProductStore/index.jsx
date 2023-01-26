import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '@slices/productListSlice.js';
import { addToCart } from '../../store/slices/cartSlice';

function ProductStore() {
    const {products} = useSelector( state => state.productList);
    const dispatch = useDispatch();

    const navigation = useNavigate();

    const onNavigateToCart = () => {
        navigation('/cart');
    }

    const handleClick = (name, stock, unitPrice) => {
        console.log(name, stock);

        dispatch( setProduct({name:name, value: stock - 1}) )
        dispatch( addToCart({name:name, unitPrice: unitPrice}) )
    }


    return(
        <div>
            <h1>Products list</h1>
            <button onClick={onNavigateToCart}>Go to cart</button>
            <ul>
                {
                    products.map( it => (
                        <li key={it.name}>
                            <h2>{it.name}</h2>
                            <h3>Stock: {it.stock}</h3>
                            <button
                                onClick={() => handleClick(it.name, it.stock, it.unit_price)}
                                disabled={it.stock === 0}
                            >Add to cart</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductStore;