import { useState, useEffect } from "react";

import { getUserDetails } from "../../api";

import styles from "./Search.module.css";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    setUsername(e.target.value);
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
        resetForm();
      });
  }, [username]);

  function handleClear(e) {
    e.preventDefault();

    setUsername("");
    e.target.value = "";
  }

  const resetForm = () => setUsername("");

  return (
    <div className={styles.container} onSubmit={handleSubmit}>
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
