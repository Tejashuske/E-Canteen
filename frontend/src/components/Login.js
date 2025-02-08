import { useState } from "react";  
import { useNavigate } from "react-router-dom";  
import axios from "axios";  
import "./Login.css"; // Import the CSS file  

const Login = () => {  
  const navigate = useNavigate();  
  const [userName, setUserName] = useState("");  
  const [password, setPassword] = useState("");  
  const [error, setError] = useState(""); // Define state for error messages  

  
  
  const handleLogin = async (e) => {  
    e.preventDefault();  

    try {  
      // Send login request to backend  
      const response = await axios.post("http://localhost:8080/api/login", {  
        userName,  
        password,  
      },
      { withCredentials: true });  

      // Extract the role from the response  
      const role = response.data.trim();  

      console.log(role);
      // Redirect based on role  
      if (role === "ROLE_ADMIN") {  
        navigate("/admin");  
      } else if (role === "ROLE_VENDOR") {  
        navigate("/vendor");  
      } else if (role === "ROLE_STUDENT") {  
        navigate("/student");  
      } else {  
        setError("Invalid role.");  
      }  
    } catch (err) {  
      setError("Login failed. Please check your credentials.");  
    }  
  };  

  return (  
    <div className="login-page">  
      <div className="login-box">  
        <h2>Login</h2>  
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
        <input  
          type="text"  
          placeholder="Username"  
          value={userName}  
          onChange={(e) => setUserName(e.target.value)}  
        /><br />  
        <input  
          type="password"  
          placeholder="Password"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
        /><br />  
        <button onClick={handleLogin}>Login</button>  
      </div>  
    </div>  
  );  
};  

export default Login;
