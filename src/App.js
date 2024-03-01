import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './style.css'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/general/Home';
import AboutUs from './components/general/AboutUs';
import Shop from './components/shop/Shop';
import ProductDetail from './components/shop/ProductDetail';
import UseScript from './hooks/UseScript';

function App() {
  return (
    <div id="main-wrapper" className="section">
      <BrowserRouter>
        <UseScript />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/product/:id' element={<ProductDetail />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
