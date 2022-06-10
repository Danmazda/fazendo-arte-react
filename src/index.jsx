import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GlobalProvider from "./Contexts/GlobalProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./views/Admin/Admin";
import Home from "./views/Home/Home";
import "./index.css";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <GlobalProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
    </GlobalProvider>
  </BrowserRouter>
);
