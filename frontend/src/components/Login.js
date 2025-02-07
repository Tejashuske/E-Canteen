import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login successful!");
    navigate("/"); // Redirect to Home after login
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Username" /><br />
        <input type="password" placeholder="Password" /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
