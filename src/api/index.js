import axios from "axios";

const API_URL = "https://api.github.com"; //process.env.GITHUB_API_URL;

async function getUsers({ page = 1 }) {
  const response = await axios.request({
    method: "GET",
    url: `${API_URL}/search/users?q=followers:%3E=1000&per_page=20&page=${page}`,
    headers: {
      Authorization: "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",
    },
  });

  return response.data;
}

async function getUserDetails({ login }) {
  const response = await axios.request({
    method: "GET",
    url: `${API_URL}/users/${login}`,
    headers: {
      Authorization: "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",
    },
  });

  return response.data;
}

export { getUsers, getUserDetails };
