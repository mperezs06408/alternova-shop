import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsList } from "./store/thunks/productsThunk";
import Router from "./router/Router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
