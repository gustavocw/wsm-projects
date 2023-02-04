import React from "react";
import axios from "axios";
import "./form.css";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const FormContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const FormShips = ({
  ship = {},
  onFinish = () => {},
  onClose = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: ship });

  const onSaveFn = async (ship) => {
    // console.table(ship);
    const { CONTADOR } = ship;
    delete ship.CONTADOR;
    //EDIT
    if (CONTADOR) {
      //UPDATE
      await axios
        .put("http://localhost:8080/naviosdb/" + CONTADOR, ship)
        .then(() => {
          toast.success("Ship atualizado com sucesso!");
        })
        .catch((err) => {
          console.log("update ship erro ", err);
          toast.error("Erro ao atualizar ship. Tente novamente mais tarde.");
        })
        .finally(onFinish);
    } else {
      //CREATE
      await axios
        .post("http://localhost:8080/naviosdb", ship)
        .then(() => {
          toast.success("Ship criado com sucesso!");
        })
        .catch(({ data }) => {
          console.log("add ship erro ", data);
          toast.error(data);
        })
        .finally(onFinish);
    }
  };

  return (
    <div>
      <form>
        <FormContainer>
          <InputArea>
            <Label>Ship Name</Label>
            <Input
              name="NOME_NAVIO"
              {...register("NOME_NAVIO", { required: "Campo obrigatório" })}
            />
            {errors.NOME_NAVIO?.message && (
              <p class={"danger"}>{errors.NOME_NAVIO?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Flag</Label>
            <Input
              name="BANDEIRA"
              type="BANDEIRA"
              {...register("BANDEIRA", { required: "Campo obrigatório" })}
            />
            {errors.BANDEIRA?.message && (
              <p class={"danger"}>{errors.BANDEIRA?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Original Name</Label>
            <Input
              name="nome_original"
              {...register("nome_original", { required: "Campo obrigatório" })}
            />
            {errors.nome_original?.message && (
              <p class={"danger"}>{errors.nome_original?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Vessel Type</Label>
            <Input
              name="tipo_embarcacao"
              {...register("tipo_embarcacao", { required: "Campo obrigatório" })}
            />
            {errors.tipo_embarcacao?.message && <p class={"danger"}>{errors.tipo_embarcacao?.message}</p>}
          </InputArea>
          <InputArea>
            <Label>Shipowner</Label>
            <Input
              name="ARMADOR"
              {...register("ARMADOR", { required: "Campo obrigatório" })}
            />
            {errors.ARMADOR?.message && (
              <p class={"danger"}>{errors.ARMADOR?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Shipowner Account</Label>
            <Input
              name="CONTA_ARMADOR"
              {...register("CONTA_ARMADOR", { required: "Campo obrigatório" })}
            />
            {errors.CONTA_ARMADOR?.message && (
              <p class={"danger"}>{errors.CONTA_ARMADOR?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Fax</Label>
            <Input
              name="FAX"
              {...register("FAX", { required: "Campo obrigatório" })}
            />
            {errors.FAX?.message && (
              <p class={"danger"}>{errors.FAX?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Phone</Label>
            <Input
              name="TELEFONE"
              {...register("TELEFONE", { required: "Campo obrigatório" })}
            />
            {errors.TELEFONE?.message && (
              <p class={"danger"}>{errors.TELEFONE?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Telex</Label>
            <Input
              name="TELEX"
              {...register("TELEX", { required: "Campo obrigatório" })}
            />
            {errors.TELEX?.message && (
              <p class={"danger"}>{errors.TELEX?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Obs Ship</Label>
            <Input
              name="OBS_NAVIO"
              {...register("nome_pai", { required: "Campo obrigatório" })}
            />
            {errors.nome_pai?.message && (
              <p class={"danger"}>{errors.nome_pai?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Email Ship</Label>
            <Input
              name="EMAIL_NAVIO"
              {...register("EMAIL_NAVIO", { required: "Campo obrigatório" })}
            />
            {errors.EMAIL_NAVIO?.message && (
              <p class={"danger"}>{errors.EMAIL_NAVIO?.message}</p>
            )}
          </InputArea>
        </FormContainer>
      </form>
      <Button className="btn-save" onClick={() => handleSubmit(onSaveFn)()} style={{ backgroundColor: '#00FF00' }}>
        SALVAR
      </Button>
      <Button className="btn-cancel" onClick={onClose} style={{ backgroundColor: '#FF0000' }}>
        CANCELAR
      </Button>
    </div>
  );
};

export default FormShips;
