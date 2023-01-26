import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductsList } from './store/thunks/productsThunk';
import Router from './router/Router';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log('restart')
    dispatch( getProductsList() );
  },[])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
