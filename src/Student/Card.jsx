import { useState } from "react";
import './Card.css';

function Card({ student }) {
    if (student.name !=null) {
      return (
        <div className="card">
          <h2>Name: {student.name}</h2>
          <p>Grade: {student.grade}</p>
        </div>
      );
    } else {
      return null;
    }
  }
  

export default Card;