import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
     </Router>
  )
}

export default App
