import { Routes, Route } from 'react-router-dom';
import Layout from "@template/Layout";
import ProductStore from '../pages/ProductStore';
import ShoppingCart from '../pages/ShoppingCart';

function Router() {
    return(
        <Routes>
          <Route 
          path='/' 
          element={
            <Layout>
              <ProductStore />
              </Layout>
          } />
          <Route 
          path='/cart' 
          element={
            <Layout>
              <ShoppingCart />
            </Layout>
          } />
          <Route path='*' element={<h1>404 error</h1>} />
        </Routes>
    )
}

export default Router