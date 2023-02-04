import axios from "axios";

const ships = {
  getAll: async () =>
    new Promise((resolve, reject) =>
      axios
        .get("...")
        .then((response) => resolve(response.data))
        .catch(reject)
    ),
  add: async (ship) =>
    Promise((resolve, reject) =>
      axios
        .post(".../ship", { body: ship })
        .then((response) => resolve(response.data))
        .catch(reject)
    ),
  update: async (id, ship) => {
    return new Promise((resolve, reject) =>
      axios
        .put(`.../${id}`, { body: ship })
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

export default ships;
