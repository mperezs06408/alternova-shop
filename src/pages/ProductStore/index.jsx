import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '@/api/db';

function ProductStore() {
    const [products, setProducts] = useState(db);

    const navigation = useNavigate();

    const handleClick = () => {
        navigation('/cart');
    }


    return(
        <div>
            <h1>Products list</h1>
            <button onClick={handleClick}>Go to cart</button>
            <ul>
                {
                    products.map( it => (
                        <li key={it.id}>
                            <h2>{it.name}</h2>
                            <h3>Stock: {it.stock}</h3>
                            <button>Add to cart</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductStore;