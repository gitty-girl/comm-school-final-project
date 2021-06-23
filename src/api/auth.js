import axios from "axios";

const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

function isObject(value) {
  if (value === null) {
    return false;
  }
  return typeof value === "object";
}

async function signUpUser(user) {
  //Check if object

  if (!isObject(user)) {
    throw new Error("signUpUser function Argument should be an object");
  }

  //error handling here (?)

  await axios.post(`${AUTH_API_URL}/auth/signup`, user, {
    headers: {
      "content-type": "application/json",
    },
  });
}

async function signInUser(username, password) {
  //Check if object

  //error handling here (?)

  try {
    const response = await axios.post(
      `${AUTH_API_URL}/auth/signin`,
      { username, password },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export { signUpUser, signInUser };
