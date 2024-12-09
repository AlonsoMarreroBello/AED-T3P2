import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

const aGetAll = async () => {
  const response = await axios(`${API_URL}/actors`);
  const actors = response.data;
  return actors;
};

const aCreate = async (data) => {
  const response = await axios.post(`${API_URL}/actors`, data);
  console.log(response.data);
  return response.data;
};

const aUpdate = async (data, id) => {
  const response = await axios.put(`${API_URL}/actors/${id}`, data);
  console.log(response.data);
  return response.data;
};

const aDelete = async (id) => {
  const response = await axios.delete(`${API_URL}/actors/${id}`);
  console.log(response.data);
  return response.data;
};

const ActorService = { aGetAll, aCreate, aUpdate, aDelete };

export default ActorService;
