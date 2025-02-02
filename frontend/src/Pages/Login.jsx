import React from 'react'

function Login() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>E-Canteen</h1>
      
      <label style={styles.label}>Enter your UserID:</label>
      <input type="number" style={styles.input} />

      <label style={styles.label}>Enter your Password:</label>
      <input type="password" style={styles.input} />

      <button type="button" style={styles.button}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px', 
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    margin: '50px auto', 
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#333',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
    fontSize: '16px',
  },
};

export default Login;