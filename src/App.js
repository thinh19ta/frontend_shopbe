import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/general/Home';
import AboutUs from './components/general/AboutUs';
import Shop from './components/shop/Shop';
import ProductDetail from './components/shop/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/product/:id' element={<ProductDetail />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
