import React, { useState } from "react";
import Card from "./Card";
import './Form.css'

function Student() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 2, name: 'Jane Smith', grade: 'B' },
    { id: 3, name: 'Tom Johnson', grade: 'A+' },
  ]);
  const [newStudent, setNewStudent] = useState({ id: '', name: '', grade: '' });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  }

  function handleAddStudent(event) {
    event.preventDefault();
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    setNewStudent({ id: '', name: '', grade: '' });
  }

  return (
    <div>
      <h1>Student Info Cards</h1>
      <form onSubmit={handleAddStudent} className="form">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newStudent.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={newStudent.grade}
          onChange={handleInputChange}
        />
        <button type="submit">Add Student</button>
      </form>
      {students.map((student) => (
        <Card key={student.id} student={student} />
      ))}
    </div>
  );
}

export default Student;
