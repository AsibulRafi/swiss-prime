import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import {
  About,
  Accounts,
  Assets,
  Careers,
  Home,
  KYC,
  MoneyLaundering,
  Platform,
  Privacy,
  Risk,
  Terms,
  Tools,
} from "./pages";
import Security from "./pages/Security";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/platforms" element={<Platform />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/laundering" element={<MoneyLaundering />} />
        <Route path="/risk" element={<Risk />} />
        <Route path="/security" element={<Security />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
