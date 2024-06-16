import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import NavbarComponen from "./components/NavbarComponen";
import FooterComponen from "./components/FooterComponen";
import ProfileComponen from "./components/ProfileComponen";
import HomePage from "./Pages/HomePage";
import Galeri from "./Pages/Galeri";
import Seniman from "./Pages/Seniman";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Beranda from "./Pages/Beranda";
import DetailSeniman from "./Pages/DetailSeniman";
import DetailLukisan from "./Pages/DetailLukisan";
import Keranjang from "./Pages/Keranjang";
import Checkout from "./Pages/Checkout";
import DetailGaleri from "./Pages/DetailGaleri";
import DetailPesanan from "./Pages/DetailPesanan";
import ChatPage from "./Pages/ChatPage";

const App = () => {
  const location = useLocation();

  const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideNavAndFooter && <NavbarComponen />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/seniman" element={<Seniman />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/detailseniman" element={<DetailSeniman />} />
        <Route path="/detaillukisan" element={<DetailLukisan />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/detailgaleri/:id" element={<DetailGaleri />} />
        <Route path="/profile" element={<ProfileComponen />} />
        <Route path="/detailpesanan" element={<DetailPesanan />} />
        <Route path="/chatpage" element={<ChatPage />} />
      </Routes>
      {!hideNavAndFooter && <FooterComponen />}
    </div>
  );
};

export default App;
