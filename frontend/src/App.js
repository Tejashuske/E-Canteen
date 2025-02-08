import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import StudentPage from "./components/StudentPage";
import CartPage from "./components/CartPage";
import Receipt from "./components/Receipt";
import VendorPage from "./components/VendorPage";
import VendorList from "./components/VendorList";
import AdminPage from "./components/AdminPage";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import AddItemPage from "./components/AddItemPage";
import MenuList from "./components/MenuList";
import OrderList from "./components/OrderList";


function App() {
  const [user, setUser] = useState(null); // Stores logged-in user details
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />

          <Route path="/student" element={<StudentPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage setCart={setCart} />} />

          <Route path="/receipt" element={<Receipt />} />
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/vendor-list" element={<VendorList />} />
          <Route path="/menu-list" element={<MenuList />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/edit-student/:id" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;