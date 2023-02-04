import React, { useEffect, useState } from "react";
import "./grid.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import FormProfessores from "../Form";
import Modal from "react-modal";
import { toast, ToastContainer, useToast } from "react-toastify";
import axios from "axios";



Modal.setAppElement("#root");

const ListaProfessores = () => {
  const [professores, setprofessores] = useState([]);
  const [professor, setprofessor] = useState({});
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    getProfessores();
  }, []);

const getProfessores = async () => {
    //BUSCA AO BANCO DE DADOS
    try {
      const res = await axios.get("http://185.27.134.10:3306/professores");
      setprofessores(
        res.data.sort((a, b) => (a.nome_completo > b.nome_completo ? 1 : -1))
      );
    } catch (error) {
    }
  };

  const onEditProfessorFn = (professor) => {
    setprofessor(professor);
    setisOpen(true);
  };

  const onDeleteProfessorFn = async (id) => {
    await axios //o ceeeerto msm seria vc fazer um modal de confirmação de exclusão
      .delete("http://185.27.134.10:3306/professores/" + id)
      .then(({ data }) => {
        const newArray = professores.filter((professor) => professor.id !== id);

        onProfessoresUpdated(newArray);
      })
      .catch(({ data }) => toast.error(data))
      .finally(() => {
        getProfessores();
      });

    setisOpen(false);
  };
  const handleFinishGerenciarProfessorFn = () => {
    setprofessor({});
    setisOpen(false);
    getProfessores();
  };

  const handleCloseGerenciarProfessorFn = () => {
    setprofessor({});
    setisOpen(false);
  };
  const handleAddProfessorFn = () => {
    setprofessor({});
    setisOpen(true);
  };

  return (
    <>
      <div className="gridcontainer">
        <div className="second-navbar">

        </div>
        <div className="grid">
          <table>
            <thead>
              <tr>
                <th>
                  <button className="modal-button" onClick={handleAddProfessorFn}>
                  Adicionar Professor
                  </button>
                </th>
                <th>Nome</th>
                <th>Email</th>
                <th>NIF</th>
                <th>Nascimento</th>
                <th>cp</th>
                <th>Endereço</th>
                <th>Horas Trabalhadas</th>
                <th>Salário</th>
                <th>Conta</th>
              </tr>
            </thead>
            <tbody>
              {professores.map((professor) => (
                <tr key={professor.id}>
                  <td>
                    <FaTrashAlt className="del" onClick={() => onDeleteProfessorFn(professor.id)} />{" "}
                    Excluir

                    <FaEdit className="edit" onClick={() => onEditProfessorFn(professor)} /> Editar
                  </td>
                  <td>{professor.nome_completo}</td>
                  <td>{professor.email}</td>
                  <td>{professor.nif}</td>
                  <td>{professor.nascimento}</td>
                  <td>{professor.cp}</td>
                  <td>{professor.endereco}</td>
                  <td>{professor.horas_trabalhadas}</td>
                  <td>{professor.pagamento}</td>
                  <td>{professor.conta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-modal">
        <Modal
          style={{
            content: {
              width: "42%",
              marginLeft: "35%",
            },
          }}
          isOpen={isOpen}
        >
          <div className="content-modal">
            <h3>{professor.id ? "Editar" : "Cadastrar"} Professor</h3>
            <FormProfessores
              professor={professor}
              onFinish={handleFinishGerenciarProfessorFn}
              onClose={handleCloseGerenciarProfessorFn}
            />
          </div>
          <ToastContainer
            autoClose={1000}
            position={toast.POSITION.BOTTOM_LEFT}
          />
        </Modal>
      </div>
      <ToastContainer autoClose={1000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
};

export default ListaProfessores;
