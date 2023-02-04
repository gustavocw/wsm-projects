import React, { useEffect, useState } from "react";
import "./grid.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import FormShips from "../Form";
import Modal from "react-modal";
import { toast, ToastContainer, useToast } from "react-toastify";
import { FiPlusCircle } from "react-icons/fi"
import axios from "axios";

Modal.setAppElement("#root");

const ListaShips = () => {
  const [ships, setships] = useState([]);
  const [ship, setship] = useState({});
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    getShips();
  }, []);

  const getShips = async () => {
    //BUSCA AO BANCO DE DADOS
    try {
      const res = await axios.get("http://localhost:8080/naviosdb");
      console.log("ships ", res.data);
      setships(
        res.data.sort((a, b) => (a.nome_completo > b.nome_completo ? 1 : -1))
      );
    } catch (error) {
      console.log("buscando alnos erro ", error);
      toast.error(error);
    }
  };

  const onEditShipFn = (ship) => {
    setship(ship);
    setisOpen(true);
  };

  const onDeleteShipFn = async (id) => {
    await axios //o ceeeerto msm seria vc fazer um modal de confirmação de exclusão
      .delete("http://localhost:8080/naviosdb/" + id)
      .then(({ data }) => {
        const newArray = ships.filter((ship) => ship.id !== id);

        onShipsUpdated(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data))
      .finally(() => {
        getShips();
      });

    setisOpen(false);
  };
  const handleFinishGerenciarShipFn = () => {
    setship({});
    setisOpen(false);
    getShips();
  };

  const handleCloseGerenciarShipFn = () => {
    setship({});
    setisOpen(false);
  };
  const handleAddShipFn = () => {
    setship({});
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
                  <button className="modal-button" onClick={handleAddShipFn}>
                    <FiPlusCircle style={{ margin: '0 3px 3px 0' }}/>New Ship
                  </button>
                </th>
                  <th>Ship Name</th>
                  <th>Flag</th>
                  <th>Original Name</th>
                  <th>Vessel Type</th>
                  <th>Shipowner</th>
                  <th>Shipowner Account</th>
                  <th>Fax</th>
                  <th>Phone</th>
                  <th>Telex</th>
                  <th>Obs Ship</th>
                  <th>Email Ship</th>
              </tr>
            </thead>
            <tbody>
              {ships.map((ship) => (
                <tr key={ship.id}>
                  <td className="editdel">
                    <FaTrashAlt className="del" onClick={() => onDeleteShipFn(ship.CONTADOR)} />{" "}
                    Delete
                    <FaEdit className="edit" onClick={() => onEditShipFn(ship)} /> Edit
                  </td>
                  <td>{ship.NOME_NAVIO}</td>
                  <td>{ship.BANDEIRA}</td>
                  <td>{ship.nome_original}</td>
                  <td>{ship.tipo_embarcacao}</td>
                  <td>{ship.ARMADOR}</td>
                  <td>{ship.CONTA_ARMADOR}</td>
                  <td>{ship.FAX}</td>
                  <td>{ship.TELEFONE}</td>
                  <td>{ship.TELEX}</td>
                  <td>{ship.OBS_NAVIO}</td>
                  <td>{ship.EMAIL_NAVIO}</td>
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
            <h3>{ship.id ? "Editar" : "New"} Ship</h3>
            <FormShips
              ship={ship}
              onFinish={handleFinishGerenciarShipFn}
              onClose={handleCloseGerenciarShipFn}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ListaShips;
