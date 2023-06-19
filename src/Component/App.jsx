import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Enjoy from "./Enjoy";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Enjoy/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
