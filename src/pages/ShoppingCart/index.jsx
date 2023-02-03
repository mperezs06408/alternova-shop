import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '@slices/cartSlice';
import { updateProductStock } from '@slices/productListSlice.js';
import { createOrder } from '@/store/thunks/productsThunk';
import Button from "@atoms/Button";
import RemoveButton from '@atoms/RemoveButton';
import CardResume from "@atoms/CardResume";
import OrderButtons from '@molecules/OrderButtons';
import OrderCard from "@molecules/OrderCard";
import './ShoppingCart.scss'

function ShoppingCart() {
    const { 
        cart,     
        totalOrderPrice,
        totalOrderProducts
    } = useSelector(state => state.cart);
    const {
        products
    } = useSelector(state => state.productList);
    const dispatch = useDispatch();

    const navigation = useNavigate();

    const handleSubmit = () => {
        navigation('/');

        dispatch( createOrder() )
    }
    const onRemoveElement = (name) => {
        const { stock } = products.find(it => it.name === name);

        dispatch( removeFromCart({name: name}) )
        dispatch( updateProductStock({name: name, value: stock + 1}) )
    }

    return(
        <div className='cart'>
            <h1 className='cart__title'>Cart</h1>
            <OrderCard
                totalProducts={totalOrderProducts}
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
                        >
                            <OrderButtons>
                                <RemoveButton 
                                    handleClick={() => onRemoveElement(it.name)}
                                />
                            </OrderButtons>
                        </CardResume>
                    ))
                }
            </OrderCard>
            <div className='cart__btn'>
                <Button 
                    label="Create order"
                    handleClick={handleSubmit}
                    disabled={totalOrderProducts === 0}
                />
            </div>
        </div>
    )
}

export default ShoppingCart;