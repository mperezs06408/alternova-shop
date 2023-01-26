import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '@/store/thunks/productsThunk';
import Button from "@atoms/Button";
import OrderTable from "@molecules/OrderTable";
import TableRow from "@atoms/TableRow";

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
            <OrderTable
                totalOrderPrice={totalOrderPrice}
            >
                {
                    cart.map(it => (
                        <TableRow
                            name={it.name}
                            quantity={it.quantity}
                            unitPrice={it.unitPrice}
                            totalPrice={it.totalPrice}
                        />
                    ))
                }
            </OrderTable>
            <Button 
                label="Create order"
                handleClick={handleSubmit}
                disabled={cart.length === 0}
            />
        </div>
    )
}

export default ShoppingCart;