import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ padding: "10px", background: "#2980b9", color: "white", display: "flex", justifyContent: "flex-end" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ margin: "10px", color: "white", textDecoration: "none" }}>About Us</Link>
      <Link to="/contact" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Contact</Link>
      <Link to="/login" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Login</Link>
    </nav>
  );
};

export default Header;
