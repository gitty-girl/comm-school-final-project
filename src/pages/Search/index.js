import { useState, useEffect } from "react";

import { getUserDetails } from "../../api";

import styles from "./Search.module.css";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    setSubmitted(true);
    setUsername(e.target.value);

    // console.log(submitted);
  }

  useEffect(() => {
    setLoading(true);

    // console.log("inside useeffect");
    // console.log("username in useeffect", username);

    getUserDetails({ username })
      .then((user) => {
        // console.log(user);
        setUser(user);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        setSubmitted(false);
        resetForm();
      });
  }, [submitted]);

  function handleClear(e) {
    e.preventDefault();

    setUsername("");
    e.target.value = "";
  }

  function checkIfSubmitted(e) {
    if (e.key === "Enter") {
      e.preventDefault();

      handleSubmit(e);
    }
  }

  const resetForm = () => setUsername("");

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label htmlFor="search" className={styles.label}>
          Go ahead, search for more users...
        </label>
        <div className={styles.wrapper}>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => checkIfSubmitted(e)}
          />
          <button className={styles.button} onClick={handleClear}>
            x
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
