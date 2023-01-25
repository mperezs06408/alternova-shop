import { Routes, Route } from 'react-router-dom';
import ProductStore from '../pages/ProductStore';
import ShoppingCart from '../pages/ShoppingCart';

function Router() {
    return(
        <Routes>
          <Route path='/' element={<ProductStore />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='*' element={<h1>404 error</h1>} />
        </Routes>
    )
}

export default Router