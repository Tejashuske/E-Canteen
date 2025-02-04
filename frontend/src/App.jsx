import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import AdminDashboard from "./Admin/AdminDashboard";
import Vendor from "./Vendor/VendorPage";
import Layout from "./Layout";

import React ,{ useState }  from "react";
import CheckoutForm from "./Pages/CheckoutForm";
function App() {
  const [cart, setCart] = useState([]); // State for managing cart items
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/menu"
            element={<Menu cart={cart} setCart={setCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/vendor-page" element={<Vendor />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
