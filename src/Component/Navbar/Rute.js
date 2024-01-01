import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Produk from "./Produk";
import Accessories from "./Accessories";
import Contact from "./Contact";


const Rute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Rute;
