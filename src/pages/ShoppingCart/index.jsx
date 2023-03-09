import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '@slices/cartSlice';
import { updateProductStock } from '@slices/productListSlice.js';
import { createOrder } from '@/store/thunks/productsThunk';
import Button from "@atoms/Button";
import RemoveButton from '@atoms/RemoveButton';
import CardResume from "@atoms/CardResume";
import Modal from '@atoms/Modal';
import OrderButtons from '@molecules/OrderButtons';
import OrderCard from "@molecules/OrderCard";
import ShoppingCartLayout from '@template/ShoppingCartLayout';
import './ShoppingCart.scss'
import { useState } from 'react';

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
    const [openModal, setOpenModal] = useState(false)
    const [idOrder, setIdOrder] = useState(0)

    const navigation = useNavigate();

    const handleSubmit = async() => {
        //navigation('/');

        const newOrder = await dispatch( createOrder() )
        if (newOrder?.idOrder) {
            setIdOrder(newOrder?.idOrder)
        }
        setOpenModal(true);
    }
    const onRemoveElement = (name) => {
        const { stock } = products.find(it => it.name === name);

        dispatch( removeFromCart({name: name}) )
        dispatch( updateProductStock({name: name, value: stock + 1}) )
    }
    const goHome = () => {
        navigation('/')
    }

    return(
        <ShoppingCartLayout
            buttons={
                <Button 
                    label="Create order"
                    handleClick={handleSubmit}
                    disabled={totalOrderProducts === 0}
                />
            }
        >
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
            {
                openModal &&
                <Modal
                    orderNumber={idOrder}
                    onContinue={goHome}
                />
            }
        </ShoppingCartLayout>
    )
}

export default ShoppingCart;