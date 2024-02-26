import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import ListProduct from './components/shop/ListProduct';
import ListCategory from './components/shop/ListCategory';

function App() {
  return (
    <BrowserRouter>
      <Header />      
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<ListCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
