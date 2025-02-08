import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const StudentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = useParams();
  const [student, setStudent] = useState({
    userName: "",
    name: "",
    password: ""
  });
  const [editingStudent, setEditingStudent] = useState(false);

  useEffect(() => {
    if (location.state && location.state.userName) {
      // Edit mode - Fetch student data
      axios.get(`http://localhost:8080/admin/getUser/${userName}`)
        .then((response) => {
          setStudent({
            userName: response.data.userName,
            name: response.data.name,
            password: response.data.password
          });
          setEditingStudent(true);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  }, [location.state, userName]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Save or Update Student
  const handleSave = () => {
    const userDTO = {
      password: student.password,
      name: student.name
    };

    if (editingStudent) {
      axios.put(`http://localhost:8080/admin/updateUser/${student.userName}`, userDTO)
        .then((response) => {
          if (response.data) {
            alert("Student updated successfully!");
            navigate("/students"); // Redirect to student list after update
          }
        })
        .catch((error) => {
          console.error("Error updating student:", error);
          alert("Error updating student.");
        });
    } else {
      axios.post("http://localhost:8080/admin/addUser", userDTO)
        .then((response) => {
          if (response.data) {
            alert("Student added successfully!");
            navigate("/students"); // Redirect to student list after adding
          }
        })
        .catch((error) => {
          console.error("Error adding student:", error);
          alert("Error adding student.");
        });
    }
  };

  // Remove Student
  const handleRemove = () => {
    axios.delete(`http://localhost:8080/admin/removeUser/${student.userName}`)
      .then((response) => {
        if (response.data) {
          alert("Student removed successfully!");
          navigate("/students"); // Redirect to student list after removing
        }
      })
      .catch((error) => {
        console.error("Error removing student:", error);
        alert("Error removing student.");
      });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
      <form style={{ display: "inline-block", textAlign: "left" }}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={student.name} 
          onChange={handleChange} 
          required 
        /><br /><br />

        <label>Username:</label>
        <input 
          type="text" 
          name="username" 
          value={student.userName} 
          onChange={handleChange} 
          disabled 
        /><br /><br />

        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={student.password} 
          onChange={handleChange} 
          required 
        /><br /><br />

        <button 
          type="button" 
          onClick={handleSave} 
          style={{ background: "green", color: "white", padding: "10px", border: "none", cursor: "pointer" }}
        >
          {editingStudent ? "Update" : "Add"}
        </button>

        {editingStudent && (
          <button 
            type="button" 
            onClick={handleRemove} 
            style={{ background: "red", color: "white", padding: "10px", border: "none", cursor: "pointer", marginLeft: "10px" }}
          >
            Remove
          </button>
        )}
      </form>

      <br />
      <button 
        onClick={() => navigate("/students")} 
        style={{ marginTop: "10px", background: "#FC8019", color: "white", padding: "10px", border: "none", cursor: "pointer" }}
      >
        Back to Student List
      </button>
    </div>
  );
};

export default StudentForm;
