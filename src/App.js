import './App.css';
import Navbar from './component/Navbar';
import Head from './component/headerSlide/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/footer';
import ProductDetails from './pages/productDetails/details'
import FilterProContex from './pages/productFilter/filterProduct';
import ProductPage from './pages/products/product'
import {  Routes, Route } from "react-router-dom";
import ScrollToTop from './component/scrollUp/scrollup';
import FilterProPetro from './pages/productFilter/filterProductPetro';
import DetailsPetro from './pages/productDetails/detailsPetro';
import Coffee from './pages/coffeePage/coffee';
import FilterCoffee from './pages/coffeePage/filterCoffee';
import CoffeeDetails from './pages/coffeePage/coffeeDetails';
import BlackHead from './component/blackheader/BlackHead';
import ContactUs from './pages/contactus/ContactUs';
import AboutUs from './component/aboutus/AboutUs';
function App() {
  return (
    <div className="App">
        
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route  path="/" element={<Head/>} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/filterproductContex" element={<FilterProContex/>}/>
          <Route path="/filterproductPetro"  element={<FilterProPetro/>}/>
          <Route path="/productdetails" element={<ProductDetails/>} />
          <Route path="/productdetailsPetro" element={<DetailsPetro/>}/>
          <Route path="/coffee"  element={<Coffee/>}/>
          <Route path="/filterproductCoffee" element={<FilterCoffee/>}/>
          <Route path="/coffeeDetails" element={<CoffeeDetails/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>


          </Routes>
          <Footer/>
       

    </div>
  );
}

export default App;
