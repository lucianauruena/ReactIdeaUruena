import './App.css';
import './test.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar'
import Home from './pages/Home';
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound';
import Detalle from './pages/Detalle';
import ProductList from './pages/ProductList';
import { CartProvider } from './Context/CartContext';
import Cart from './pages/Cart';

function App() {
  return (
    //JSX
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/contact' element={<Contacto />}/>  
            <Route path='/product/:id' element={<Detalle />} />
            <Route path='/products/:category' element={<ProductList />}/>  
            <Route path='/Cart' element={<Cart />}/> 
            <Route path='/' element={<Home />}/>  
            <Route path='*' element={<NotFound />}/>  
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div> 

  );
}

export default App;
