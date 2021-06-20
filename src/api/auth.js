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

  await axios
    .post(`${AUTH_API_URL}/auth/signup`, user, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      console.log({ response });
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  // return response.data;
}

async function signInUser(username, password) {
  //Check if object

  //error handling here (?)

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
}

export { signUpUser, signInUser };
