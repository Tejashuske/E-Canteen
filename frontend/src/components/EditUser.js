import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditUser.css";

const EditUser = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { userName } = useParams();

  const [student, setStudent] = useState({
    userName: "",
    password: "",
    name: ""
  });

  const [error, setError] = useState("");

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
    // Basic validation
    if (!student.name || !student.password) {
      setError("Please fill in all fields.");
      return;
    }

    setError(""); // Reset error message

    try {
      const updatedData = {
        password: student.password,
        name: student.name,
      };

      const response = await axios.put(
        `http://localhost:8080/admin/updateUser/${userName}`,
        updatedData // Send only password and name in request body
      );

      if (response.data) {
        alert("Student updated successfully!");
        navigate("/students"); // Redirect back to student list
      }
    } catch (error) {
      console.error("Error updating student:", error);
      setError("An error occurred while updating the student.");
    }
  };



  return (
    <div className="form-container">
      <div className="edit-form-box">
        <h2>Edit Student</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={student.userName}
          onChange={handleInputChange}
          disabled
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={student.password}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdate} className="update-button">
          Update
        </button>
        <button onClick={() => navigate("/students")} className="back-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditUser;
