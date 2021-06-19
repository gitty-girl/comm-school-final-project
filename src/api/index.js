import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

async function getUsers() {
  const response = await axios.get(`${API_URL}/posts`);

  return response.data;
}

export { getUsers };
