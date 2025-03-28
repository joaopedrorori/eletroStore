import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";
import Product from "./Components/Product.jsx";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="product/:id" element={<Product />} />

            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
