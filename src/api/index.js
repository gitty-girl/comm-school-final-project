import axios from "axios";

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_API_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

async function getUsers({ page = 1 }) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${GITHUB_API_URL}/search/users?q=followers:%3E=1000&per_page=20&page=${page}`,
      headers: {
        Authorization: `token ${GITHUB_API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function getUserDetails({ login }) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${GITHUB_API_URL}/users/${login}`,
      headers: {
        Authorization: `token ${GITHUB_API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function getUserOrganisations({ login }) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${GITHUB_API_URL}/users/${login}/orgs`,
      headers: {
        Authorization: `token ${GITHUB_API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function getUserRepositories({ login }) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${GITHUB_API_URL}/users/${login}/repos`,
      headers: {
        Authorization: `token ${GITHUB_API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function findUsersByUsername({ username }) {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${GITHUB_API_URL}/search/users?q=${username}`,
      headers: {
        Authorization: `token ${GITHUB_API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export {
  getUsers,
  getUserDetails,
  getUserOrganisations,
  getUserRepositories,
  findUsersByUsername,
};
