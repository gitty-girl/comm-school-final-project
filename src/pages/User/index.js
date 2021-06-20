// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";

// import { getUserDetails } from "../../api";

function User() {
  // const { login } = useParams();

  // const [currentUser, setCurrentUser] = useState({});
  // const [loading, setLoading] = useState({});
  // const [error, setError] = useState({});

  // console.log(login);

  // useEffect(() => {
  //   // get user
  //   getUserDetails({ login })
  //     .then((data) => setCurrentUser(data))
  //     .catch((err) => setError(err.message))
  //     .finally(() => setLoading(false));
  // }, [login]);

  return (
    <div className="container">
      <div className="user-container">
        user here
        {/* <div className="user-avatar">
          <img src="#" alt="User" />
        </div>
        <div>
          <h1>{}</h1>
          <p>{}</p>
        </div> */}
      </div>
    </div>
  );
}

export default User;
