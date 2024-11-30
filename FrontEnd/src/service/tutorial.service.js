import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

const aGetAll = async () => {
  const response = await axios(`${API_URL}/actors`);
  const actors = response.data;

  return actors;
};

const aCreate = async (data) => {
  const response = await axios.post(`${API_URL}/tutorials`, data);
  return response.data.data;
};

const TutorialService = { aGetAll, aCreate };

export default TutorialService;
