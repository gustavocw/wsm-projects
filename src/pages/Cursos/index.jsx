import React from "react";
import "./cursos.css";
import SidebarContent from "../../components/SidebarContent/SidebarContent";
import Accordion from "react-bootstrap/Accordion";

const CursosContainer = () => {
  return (
    <div>
      <SidebarContent />
      <div className="accord">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Direito</Accordion.Header>
            <Accordion.Body className="custom-accord">
              <table>
                <thead>
                  <tr>
                    <th>Semestres</th>
                    <th>Disciplinas</th>
                    <th>Professor</th>
                    <th>Alunos</th>
                  </tr>
                  <tr>
                    <td>1º</td>
                    <td>Direito Economico</td>
                    <td>Marcos Souza</td>
                    <td>Carlos Silva</td>
                  </tr>
                  <tr>
                    <td>1º</td>
                    <td>Direito Comercial	</td>
                    <td>Elizabete Souza</td>
                    <td>Liliane Silva</td>
                  </tr>
                </thead>
              </table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Administração</Accordion.Header>
            <Accordion.Body className="custom-accord">
              <table>
                <thead>
                  <tr>
                    <th>Semestres</th>
                    <th>Disciplinas</th>
                    <th>Professor</th>
                    <th>Alunos</th>
                  </tr>
                  <tr>
                    <td>1º</td>
                    <td>Economia Política</td>
                    <td>Marcos Souza</td>
                    <td>Carlos Silva</td>
                  </tr>
                  <tr>
                    <td>1º</td>
                    <td>Introdução à Administração Pública</td>
                    <td>Elizabete Souza</td>
                    <td>Liliane Silva</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>Contabilidade Pública</td>
                    <td>Moacir Souza</td>
                    <td>Roberto Algusto</td>
                  </tr>
                </thead>
              </table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default CursosContainer;
