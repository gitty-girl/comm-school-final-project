import axios from "axios";

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_API_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

async function getUsers({ page = 1 }) {
  const response = await axios.request({
    method: "GET",
    url: `${GITHUB_API_URL}/search/users?q=followers:%3E=1000&per_page=20&page=${page}`,
    headers: {
      Authorization: `token ${GITHUB_API_TOKEN}`,
    },
  });

  return response.data;
}

async function getUserDetails({ login }) {
  const response = await axios.request({
    method: "GET",
    url: `${GITHUB_API_URL}/users/${login}`,
    headers: {
      Authorization: `token ${GITHUB_API_TOKEN}`,
    },
  });

  return response.data;
}

async function getUserOrganisations({ login }) {
  const response = await axios.request({
    method: "GET",
    url: `${GITHUB_API_URL}/users/${login}/orgs`,
    headers: {
      Authorization: `token ${GITHUB_API_TOKEN}`,
    },
  });

  return response.data;
}

async function getUserRepositories({ login }) {
  const response = await axios.request({
    method: "GET",
    url: `${GITHUB_API_URL}/users/${login}/repos`,
    headers: {
      Authorization: `token ${GITHUB_API_TOKEN}`,
    },
  });

  return response.data;
}

export { getUsers, getUserDetails, getUserOrganisations, getUserRepositories };
