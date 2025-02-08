// import { Link } from "react-router-dom";
// import "./Header.css"; // Import the CSS file

// // const Header = () => {
// //   return (
// //     <nav className="navbar">
// //       <Link to="/" className="nav-link">Home</Link>
// //       <Link to="/about" className="nav-link">About Us</Link>
// //       <Link to="/contact" className="nav-link">Contact</Link>
// //       <Link to="/login" className="nav-link">Login</Link>
// //     </nav>
// //   );
// // };

// // export default Header;
// import { Link } from "react-router-dom";
// import "./Header.css"; // Import the CSS file

// const Header = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <h1 className="site-name">E-Canteen</h1>
//       </div>
//       <div className="nav-links">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/about" className="nav-link">About Us</Link>
//         <Link to="/contact" className="nav-link">Contact</Link>
//         <Link to="/login" className="nav-link">Login</Link>
//       </div>
//     </nav>
//   );
// };

// export default Header;
// import { Link } from "react-router-dom";

// const Header = ({ user, setUser }) => {
//   const handleLogout = () => {
//     setUser(null); // Clears user data on logout
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <h1 className="site-name">E-Canteen</h1>
//       </div>
//       <div className="nav-links">
//         <Link to="/" className="nav-link">Home</Link>
//         {user ? (
//           <>
//             {user.role === "admin" && <Link to="/admin" className="nav-link">Admin Dashboard</Link>}
//             {user.role === "student" && <Link to="/student" className="nav-link">Student Dashboard</Link>}
//             {user.role === "vendor" && <Link to="/vendor" className="nav-link">Vendor Dashboard</Link>}
//             <button onClick={handleLogout} className="nav-link">Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/about" className="nav-link">About Us</Link>
//             <Link to="/contact" className="nav-link">Contact</Link>
//             <Link to="/login" className="nav-link">Login</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="site-name"><strong>E-Canteen</strong></h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
};

export default Header;

