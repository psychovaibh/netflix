import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Enjoy from "./Enjoy";
import Footer from "./Footer";
import Download from "./Download";
import Watch from "./Watch";
import Kids from "./Kids";
import Frequent from "./Frequent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Enjoy />
        <Download />
        <Watch />
        <Kids />
        <Frequent />
        <Footer />
      </BrowserRouter>
    </>
  );
}
