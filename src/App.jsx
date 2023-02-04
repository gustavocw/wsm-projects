import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroShips from "./pages/cadastros/ships";
import CadastroProfessores from "./pages/cadastros/professores";
//TODO pra renomerar o nodemon precisa estar parado
function App() {
  return (
    <div className="App">
      {/* ROTAS DE CADA PÁGINA */}
      <Router>
        <Routes>
          <Route exact path="/" element={<CadastroShips />} />
          <Route path="/cadastros/ships" element={<CadastroShips />} />
          <Route
            path="/cadastros/professores"
            element={<CadastroProfessores />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
