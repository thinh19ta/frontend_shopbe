import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/general/Home';
import AboutUs from './components/general/AboutUs';
import Shop from './components/shop/Shop';
import ProductDetail from './components/shop/ProductDetail';
import './assets/styles/style.css'
import 'bootstrap'
function App() {
  return (
    <div id="main-wrapper" className="section">
      <BrowserRouter>
        askd
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/product/:id' element={<ProductDetail />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
