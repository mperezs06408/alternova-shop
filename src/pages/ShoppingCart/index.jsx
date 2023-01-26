import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '@/store/thunks/productsThunk';
function ShoppingCart() {
    const { 
        cart,     
        totalOrderPrice
    } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const navigation = useNavigate();

    const handleSubmit = () => {
        navigation('/');

        dispatch( createOrder() )
    }

    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {
                    cart.map(it => (
                        <li key={it.id}>Product: {it.name} - Quantity: {it.quantity} - UnitPrice: {it.unitPrice} - Total price: {it.totalPrice}</li>
                    ))
                }
            </ul>
            <p>Total order price: { totalOrderPrice }</p>
            <button onClick={handleSubmit}>Create order</button>
        </div>
    )
}

export default ShoppingCart;