import React, { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SidebarContent from "../../components/SidebarContent/SidebarContent"
import './home.css'

const data = [
  { name: 'Jan', students: 100 },
  { name: 'Fev', students: 120 },
  { name: 'Mar', students: 105 },
  { name: 'Apr', students: 98 },
  { name: 'May', students: 140 },
  { name: 'Jun', students: 160 },
  { name: 'Jul', students: 175 },
  { name: 'Ago', students: 167 },
  { name: 'Set', students: 185 },
  { name: 'Out', students: 190 },
  { name: 'Nov', students: 210 },
  { name: 'Dez', students: 195 },
];


const Home = () => {


  const [studentCount, setStudentCount] = useState(0);
  const [courseCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/alunos/")
      .then(response => response.json())
      .then(data => setStudentCount(data.length));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/professores/")
      .then(response => response.json())
      .then(data => setTeacherCount(data.length));
  }, []);

  
  return (
    <div>
      <SidebarContent />

      <div className="container">
        <div className="counter-content"></div>
      <div className="counter student-counter">
        <h3 className="counter-title">Alunos</h3>
        <p className="counter-count">{studentCount}</p>
        <div className="counter-button-container">
        </div>
      </div>
      <div className="counter course-counter">
        <h3 className="counter-title">Cursos</h3>
        <p className="counter-count">{courseCount}</p>
        <div className="counter-button-container">
        </div>
      </div>
      <div className="counter teacher-counter">
        <h3 className="counter-title">Professores</h3>
        <p className="counter-count">{teacherCount}</p>
        <div className="counter-button-container">
        </div>
      </div>
      <div className="counter course-counter">
        <h3 className="counter-title">Disciplinas</h3>
        <p className="counter-count">{courseCount}</p>
        <div className="counter-button-container">
        </div>
      </div>
      <div className="graph-container">
        <LineChart width={900} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="3" />
          <Line type="monotone" dataKey="students" stroke="#483D8B" />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
    </div>
  )
}

export default Home