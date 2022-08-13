import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.js";
import Home from "./routes/home/home.js";
import Authentication from "./routes/authentication/authentication.js";
import Shop from "./routes/shop/shop.js";
import Checkout from "./routes/check-out/check-out.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
