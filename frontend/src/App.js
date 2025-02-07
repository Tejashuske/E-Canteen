import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import StudentPage from "./components/StudentPage";
import CartPage from "./components/CartPage";
import ReceiptPage from "./components/ReceiptPage";

function App() {
  const [cart, setCart] = useState([]); // Cart state

  return (
    <Router>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/" element={<StudentPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/receipt" element={<ReceiptPage cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
