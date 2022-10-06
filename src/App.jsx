import { useState } from "react";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Faqs from "./components/Pages/Faqs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
