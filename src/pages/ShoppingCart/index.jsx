import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '@/store/thunks/productsThunk';
import Button from "@atoms/Button";
import OrderCard from "@molecules/OrderCard";
import CardResume from "@atoms/CardResume";
import './ShoppingCart.scss'

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
        <div className='cart'>
            <h1 className='cart__title'>Cart</h1>
            <OrderCard
                totalProducts={cart.length}
                totalOrderPrice={totalOrderPrice}
            >
                {
                    cart.map(it => (
                        <CardResume
                            key={it.name}
                            name={it.name}
                            quantity={it.quantity}
                            unitPrice={it.unitPrice}
                            totalPrice={it.totalPrice}
                        />
                    ))
                }
            </OrderCard>
            <div className='cart__btn'>
                <Button 
                    label="Create order"
                    handleClick={handleSubmit}
                    disabled={cart.length === 0}
                />
            </div>
        </div>
    )
}

export default ShoppingCart;