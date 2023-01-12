import axios from "axios";

const alunos = {
  getAll: async () =>
    new Promise((resolve, reject) =>
      axios
        .get("...")
        .then((response) => resolve(response.data))
        .catch(reject)
    ),
  add: async (aluno) =>
    Promise((resolve, reject) =>
      axios
        .post(".../aluno", { body: aluno })
        .then((response) => resolve(response.data))
        .catch(reject)
    ),
  update: async (id, aluno) => {
    return new Promise((resolve, reject) =>
      axios
        .put(`.../${id}`, { body: aluno })
        .then((response) => resolve(response.data))
        .catch(reject)
    );
  },
  delete: async (id) =>
    Promise((resolve, reject) =>
      axios
        .delete(`.../${id}`)
        .then((response) => resolve(response.data))
        .catch(reject)
    ),
};

export default alunos;
