
import {  useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import { fetchData } from './store/ProductSlice';


function App() {

  const dispatch = useDispatch();
  dispatch(fetchData());
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
