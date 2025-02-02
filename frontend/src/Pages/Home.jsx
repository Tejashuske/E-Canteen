import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container} onClick={() => navigate("/login")}>
      <img 
        src="/Images/logo.png" 
        alt="E-Canteen Logo" 
        style={styles.logo} 
      />
      <h1 style={styles.text}>E-Canteen</h1>
      <p style={styles.clickText}>(Click anywhere to continue)</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100vw',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
  },
  logo: {
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
  },
  clickText: {
    fontSize: '14px',
    color: '#777',
    marginTop: '10px',
  },
};

export default Home;