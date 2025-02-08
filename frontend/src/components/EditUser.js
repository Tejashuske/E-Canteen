import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { userName } = useParams();

  const [student, setStudent] = useState({
    userName: "",
    password: "",
    name: ""
  });

  useEffect(() => {
    if (state) {
      setStudent({
        userName: state.userName,
        password: state.password,
        name: state.name
      });
    }
  }, [state]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Handle update
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/admin/updateUser/${userName}`, 
        student
      );

      if (response.data) {
        alert("Student updated successfully!");
        navigate("/students"); // Redirect back to student list
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleInputChange} />
      <input type="text" name="userName" placeholder="Username" value={student.userName} onChange={handleInputChange} disabled />
      <input type="password" name="password" placeholder="Password" value={student.password} onChange={handleInputChange} />
      <button onClick={handleUpdate} className="update-button">Update</button>
      <button onClick={() => navigate("/students")} className="back-button">Cancel</button>
    </div>
  );
};

export default EditStudent;
