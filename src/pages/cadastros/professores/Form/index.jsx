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

const FormProfessores = ({
  professor = {},
  onFinish = () => {},
  onClose = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: professor });

  const onSaveFn = async (professor) => {
    // console.table(professor);
    const { id } = professor;
    delete professor.id;
    //EDIT
    if (id) {
      //UPDATE
      await axios
        .put("http://localhost:8080/professores/" + id, professor)
        .then(() => {
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(onFinish);
    } else {
      //CREATE
      await axios
        .post("http://localhost:8080/professores", professor)
        .then(() => {
        })
        .catch(({ data }) => {
          console.log("add professor erro ", data);
        })
        .finally(onFinish);
    }
  };

  return (
    <div>
      <form>
        <FormContainer>
          {/* //TODO alterar os campos de dados do professor */}
          <InputArea>
            <Label>Nome</Label>
            <Input
              name="nome_completo"
              {...register("nome_completo", { required: "Campo obrigatório" })}
            />
            {errors.nome_completo?.message && (
              <p className={"danger"}>{errors.nome_completo?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>E-mail</Label>
            <Input
              name="email"
              type="email"
              {...register("email", { required: "Campo obrigatório" })}
            />
            {errors.email?.message && (
              <p className={"danger"}>{errors.email?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>NIF</Label>
            <Input
              name="nif"
              {...register("nif", { required: "Campo obrigatório" })}
            />
            {errors.nif?.message && (
              <p className={"danger"}>{errors.nif?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Nascimento</Label>
            <Input
              name="nascimento" type="date"
              {...register("nascimento", { required: "Campo obrigatório" })}
            />
            {errors.nascimento?.message && (
              <p className={"danger"}>{errors.nascimento?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>CP</Label>
            <Input
              name="cp"
              {...register("cp", { required: "Campo obrigatório" })}
            />
            {errors.cp?.message && <p className={"danger"}>{errors.cp?.message}</p>}
          </InputArea>
          <InputArea>
            <Label>Endereço</Label>
            <Input
              name="endereco"
              {...register("endereco", { required: "Campo obrigatório" })}
            />
            {errors.endereco?.message && (
              <p className={"danger"}>{errors.endereco?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Horas Trabalhadas</Label>
            <Input
              name="horas_trabalhadas"
              {...register("horas_trabalhadas", { required: "Campo obrigatório" })}
            />
            {errors.horas_trabalhadas?.message && (
              <p className={"danger"}>{errors.horas_trabalhadas?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Salário</Label>
            <Input
              name="pagamento"
              {...register("pagamento", { required: "Campo obrigatório" })}
            />
            {errors.pagamento?.message && (
              <p className={"danger"}>{errors.pagamento?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Conta</Label>
            <Input
              name="conta"
              {...register("conta", { required: "Campo obrigatório" })}
              
            />
            {errors.conta?.message && (
              <p className={"danger"}>{errors.conta?.message}</p>
            )}
          </InputArea>
        </FormContainer>
      </form>
      <Button className="btn-save" onClick={() => handleSubmit(onSaveFn)()}>
        SALVAR
      </Button>
      <Button className="btn-cancel" onClick={onClose}>
        CANCELAR
      </Button>
    </div>
  );
};

export default FormProfessores;
