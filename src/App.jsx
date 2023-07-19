import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Cart from "./pages/Cart";
import Purchase from "./pages/Purchase";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase/history" element={<Purchase />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
