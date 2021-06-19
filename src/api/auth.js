import axios from "axios";

const AUTH_URL = process.env.REACT_APP_AUTH_URL;

async function signUpUser(user) {
  //Check if object

  //error handling here (?)

  const response = await axios.post(`${AUTH_URL}/auth/signup`, user, {
    headers: {
      "content-type": "application/json",
    },
  });

  return response.data;
}

async function signInUser(username, password) {
  //Check if object

  //error handling here (?)

  const response = await axios.post(
    `${AUTH_URL}/auth/signin`,
    { username, password },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  return response.data;
}

export { signUpUser, signInUser };
