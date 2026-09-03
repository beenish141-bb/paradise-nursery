import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring the beauty of nature into your home.
        </p>

        <Link to="/plants">
          <button className="get-started">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Paradise Nursery</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/plants"
            element={
              <>
                <Navbar />
                <ProductList />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <CartItem />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutUs />
              </>
            }
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
