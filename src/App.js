import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/general/Home';
import AboutUs from './components/general/AboutUs';
import Shop from './components/shop/Shop';
import ProductDetail from './components/shop/ProductDetail';
import Contact from './components/general/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/product/:id' element={<ProductDetail />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
