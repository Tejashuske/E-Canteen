import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import Payment from './Pages/Payment'
import AdminDashboard from "./Admin/AdminDashboard"; 
import Vendor from "./Vendor/VendorPage"; 

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/vendor-page" element={<Vendor />} />
      </Routes>
     </Router>
  )
}

export default App
