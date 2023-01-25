import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '@/api/db';

function ShoppingCart() {
    const [products, setProducts] = useState(db);
    const navigation = useNavigate();

    const handleSubmit = () => {
        navigation('/');
    }

    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {
                    products.map(it => (
                        <li key={it.id}>Product: {it.name} - Quantity: {it.stock} - UnitPrice: {it.price} - Total price: +1000</li>
                    ))
                }
            </ul>
            <p>Total order price: +1000</p>
            <button onClick={handleSubmit}>Create order</button>
        </div>
    )
}

export default ShoppingCart;