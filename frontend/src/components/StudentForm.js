import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const StudentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editingStudent = location.state || null;  // If editing, pre-fill data

  const [student, setStudent] = useState({
    id: editingStudent ? editingStudent.id : Date.now(),
    name: editingStudent ? editingStudent.name : "",
    username: editingStudent ? editingStudent.username : "",
    password: editingStudent ? editingStudent.password : ""
  });

  // Handle input change
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Save Student
  const handleSave = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    if (editingStudent) {
      // Update existing student
      const updatedStudents = students.map((s) => (s.id === student.id ? student : s));
      localStorage.setItem("students", JSON.stringify(updatedStudents));
    } else {
      // Add new student
      localStorage.setItem("students", JSON.stringify([...students, student]));
    }
    navigate("/students");
  };

  // Remove Student
  const handleRemove = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const updatedStudents = students.filter((s) => s.id !== student.id);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    navigate("/students");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
      <form style={{ display: "inline-block", textAlign: "left" }}>
        <label>Name:</label>
        <input type="text" name="name" value={student.name} onChange={handleChange} required /><br /><br />
        
        <label>Username:</label>
        <input type="text" name="username" value={student.username} onChange={handleChange} required /><br /><br />

        <label>Password:</label>
        <input type="password" name="password" value={student.password} onChange={handleChange} required /><br /><br />

        <button type="button" onClick={handleSave} style={{ background: "green", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
          {editingStudent ? "Update" : "Add"}
        </button>

        {editingStudent && (
          <button type="button" onClick={handleRemove} style={{ background: "red", color: "white", padding: "10px", border: "none", cursor: "pointer", marginLeft: "10px" }}>
            Remove
          </button>
        )}
      </form>

      <br />
      <button onClick={() => navigate("/students")} style={{ marginTop: "10px", background: "#FC8019", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
        Back to Student List
      </button>
    </div>
  );
};

export default StudentForm;
