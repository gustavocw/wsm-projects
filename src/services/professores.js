import axios from "axios";

const professores = {
  getAll: async () =>
    new Promise((resolve, reject) =>
      axios
        .get("...")
        .then((response) => resolve(response.data))
        .catch(reject)
    ),
  add: async (professor) =>
    Promise((resolve, reject) =>
      axios
        .post(".../professores", { body: professor })
        .then((response) => resolve(response.data))
        .catch(reject)
    ),
  update: async (id, professor) => {
    return new Promise((resolve, reject) =>
      axios
        .put(`.../${id}`, { body: professor })
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

export default professores;
