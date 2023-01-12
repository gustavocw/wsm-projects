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

const FormAlunos = ({
  aluno = {},
  onFinish = () => {},
  onClose = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: aluno });

  const onSaveFn = async (aluno) => {
    // console.table(aluno);
    const { id } = aluno;
    delete aluno.id;
    //EDIT
    if (id) {
      //UPDATE
      await axios
        .put("http://localhost:8080/alunos/" + id, aluno)
        .then(() => {
          toast.success("Aluno atualizado com sucesso!");
        })
        .catch((err) => {
          console.log("update aluno erro ", err);
          toast.error("Erro ao atualizar aluno. Tente novamente mais tarde.");
        })
        .finally(onFinish);
    } else {
      //CREATE
      await axios
        .post("http://localhost:8080/alunos", aluno)
        .then(() => {
          toast.success("Aluno criado com sucesso!");
        })
        .catch(({ data }) => {
          console.log("add aluno erro ", data);
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
            <Label>Nome</Label>
            <Input
              name="nome_completo"
              {...register("nome_completo", { required: "Campo obrigatório" })}
            />
            {errors.nome_completo?.message && (
              <p class={"danger"}>{errors.nome_completo?.message}</p>
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
              <p class={"danger"}>{errors.email?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>NIF</Label>
            <Input
              name="nif"
              {...register("nif", { required: "Campo obrigatório" })}
            />
            {errors.nif?.message && (
              <p class={"danger"}>{errors.nif?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>CP</Label>
            <Input
              name="cp"
              {...register("cp", { required: "Campo obrigatório" })}
            />
            {errors.cp?.message && <p class={"danger"}>{errors.cp?.message}</p>}
          </InputArea>
          <InputArea>
            <Label>Matrícula</Label>
            <Input
              name="matricula"
              {...register("matricula", { required: "Campo obrigatório" })}
            />
            {errors.matricula?.message && (
              <p class={"danger"}>{errors.matricula?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Cidade</Label>
            <Input
              name="cidade"
              {...register("cidade", { required: "Campo obrigatório" })}
            />
            {errors.cidade?.message && (
              <p class={"danger"}>{errors.cidade?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Rua</Label>
            <Input
              name="rua"
              {...register("rua", { required: "Campo obrigatório" })}
            />
            {errors.rua?.message && (
              <p class={"danger"}>{errors.rua?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Complemento</Label>
            <Input
              name="complemento"
              {...register("complemento", { required: "Campo obrigatório" })}
            />
            {errors.complemento?.message && (
              <p class={"danger"}>{errors.complemento?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Data de Nascimento</Label>
            <Input
              name="nascimento"
              {...register("nascimento", { required: "Campo obrigatório" })}
              type="date"
            />
            {errors.nascimento?.message && (
              <p class={"danger"}>{errors.nascimento?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Nome do Pai</Label>
            <Input
              name="nome_pai"
              {...register("nome_pai", { required: "Campo obrigatório" })}
            />
            {errors.nome_pai?.message && (
              <p class={"danger"}>{errors.nome_pai?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Nome da Mãe</Label>
            <Input
              name="nome_mae"
              {...register("nome_mae", { required: "Campo obrigatório" })}
            />
            {errors.observacao?.message && (
              <p class={"danger"}>{errors.observacao?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Entidade de Conclusão</Label>
            <Input
              name="entidade_de_conclusao"
              {...register("entidade_de_conclusao", {
                required: "Campo obrigatório",
              })}
            />
            {errors.observacao?.message && (
              <p class={"danger"}>{errors.observacao?.message}</p>
            )}
          </InputArea>
          <InputArea>
            <Label>Observações</Label>
            <Input
              name="observacao"
              {...register("observacao", { required: "Campo obrigatório" })}
            />
            {errors.observacao?.message && (
              <p class={"danger"}>{errors.observacao?.message}</p>
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

export default FormAlunos;
