import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./StudentList.css";

const StudentList = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: "", username: "", password: "" });

  // Fetch students from backend
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/getAllUsers");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // Add student
  const handleAddStudent = async () => {
    if (newStudent.name && newStudent.password) {
      try {
        const userDTO = {
          userName: newStudent.username, // Ensure username is provided
          password: newStudent.password,
          name: newStudent.name,
          role: "ROLE_STUDENT",
        };

        const response = await axios.post("http://localhost:8080/admin/addUser", userDTO);

        if (response.data) {
          fetchStudents(); // Refresh student list
          setShowForm(false);
          setNewStudent({ name: "", username: "", password: "" });
        }
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };


  // Delete student
  const handleDelete = async (userName) => { // Ensure it matches backend response
    try {
      const response = await axios.delete(`http://localhost:8080/admin/removeUser/${userName}`);
      if (response.data) {
        fetchStudents(); // Refresh student list
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };


  return (
    <div className="container">
      <h2 className="title">Student List</h2>

      <button onClick={() => setShowForm(!showForm)} className="add-button">
        {showForm ? "Close Form" : "Add Student"}
      </button>

      {showForm && (
        <div className="form-container">
          <input type="text" name="name" placeholder="Name" value={newStudent.name} onChange={handleInputChange} />
          <input type="text" name="username" placeholder="Username" value={newStudent.username} onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" value={newStudent.password} onChange={handleInputChange} />
          <button onClick={handleAddStudent} className="add-button">Add</button>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.userName}</td> {/* Use 'userName' as per backend response */}
                <td>
                  <button
                    onClick={() => navigate(`/edit-student/${student.userName}`, { state: student })}
                    className="edit-button"
                  >
                    Edit
                  </button>

                  <button onClick={() => handleDelete(student.userName)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <Link to="/admin" className="back-link">
        Back to Admin Dashboard
      </Link>
    </div>
  );
};

export default StudentList;
