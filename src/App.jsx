import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import CadastroAlunos from "./pages/cadastros/alunos";
import CadastroProfessores from "./pages/cadastros/professores";
import CursosContainer from "./pages/Cursos";
//TODO pra renomerar o nodemon precisa estar parado
function App() {
  return (
    <div className="App">
      {/* ROTAS DE CADA PÁGINA */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadastros" element={<CadastroAlunos />} />
          <Route path="/cadastros/alunos" element={<CadastroAlunos />} />
          <Route
            path="/cadastros/professores"
            element={<CadastroProfessores />}
          />
          <Route path="/cursos" element={<CursosContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
