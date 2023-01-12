import React, { useEffect, useState } from "react";
import "./grid.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import FormAlunos from "../Form";
import Modal from "react-modal";
import { toast, ToastContainer, useToast } from "react-toastify";
import axios from "axios";

Modal.setAppElement("#root");

const ListaAlunos = () => {
  const [alunos, setalunos] = useState([]);
  const [aluno, setaluno] = useState({});
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    getAlunos();
  }, []);

  const getAlunos = async () => {
    //BUSCA AO BANCO DE DADOS
    try {
      const res = await axios.get("http://localhost:8080/alunos");
      console.log("alunos ", res.data);
      setalunos(
        res.data.sort((a, b) => (a.nome_completo > b.nome_completo ? 1 : -1))
      );
    } catch (error) {
      console.log("buscando alnos erro ", error);
      toast.error(error);
    }
  };

  const onEditAlunoFn = (aluno) => {
    setaluno(aluno);
    setisOpen(true);
  };

  const onDeleteAlunoFn = async (id) => {
    await axios //o ceeeerto msm seria vc fazer um modal de confirmação de exclusão
      .delete("http://localhost:8080/alunos/" + id)
      .then(({ data }) => {
        const newArray = alunos.filter((aluno) => aluno.id !== id);

        onAlunosUpdated(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data))
      .finally(() => {
        getAlunos();
      });

    setisOpen(false);
  };
  const handleFinishGerenciarAlunoFn = () => {
    setaluno({});
    setisOpen(false);
    getAlunos();
  };

  const handleCloseGerenciarAlunoFn = () => {
    setaluno({});
    setisOpen(false);
  };
  const handleAddAlunoFn = () => {
    setaluno({});
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
                  <button className="modal-button" onClick={handleAddAlunoFn}>
                    Adicionar Aluno
                  </button>
                </th>
                <th>Nome</th>
                <th>Email</th>
                <th>NIF</th>
                <th>CP</th>
                <th>Matrícula</th>
                <th>Cidade</th>
                <th>Rua</th>
                <th>Complemento</th>
                <th>Nascimento</th>
                <th>Pai</th>
                <th>Mãe</th>
                <th>Ent. Conclusão</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.id}>
                  <td>
                    <FaTrashAlt className="del" onClick={() => onDeleteAlunoFn(aluno.id)} />{" "}
                    Excluir
                    <FaEdit className="edit" onClick={() => onEditAlunoFn(aluno)} /> Editar
                  </td>
                  <td>{aluno.nome_completo}</td>
                  <td>{aluno.email}</td>
                  <td>{aluno.nif}</td>
                  <td>{aluno.cp}</td>
                  <td>{aluno.matricula}</td>
                  <td>{aluno.cidade}</td>
                  <td>{aluno.rua}</td>
                  <td>{aluno.complemento}</td>
                  <td>{aluno.nascimento}</td>
                  <td>{aluno.nome_pai}</td>
                  <td>{aluno.nome_mae}</td>
                  <td>{aluno.entidade_de_conclusao}</td>
                  <td>{aluno.observacao}</td>
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
            <h3>{aluno.id ? "Editar" : "Cadastrar"} Aluno</h3>
            <FormAlunos
              aluno={aluno}
              onFinish={handleFinishGerenciarAlunoFn}
              onClose={handleCloseGerenciarAlunoFn}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ListaAlunos;
