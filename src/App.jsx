import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Cart from "./pages/Cart";
import Purchase from "./pages/Purchase";
import Sidebar from "./components/Sidebar";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase/history" element={<Purchase />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
