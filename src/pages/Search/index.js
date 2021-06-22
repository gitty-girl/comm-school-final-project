import { useState, useEffect } from "react";

import styles from "./Search.module.css";

import { findUsersByUsername } from "../../api";

import { UsersListing, Loader } from "../../components";

function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [logins, setLogins] = useState([]);
  const loginsCount = logins.length || 0;

  function reset() {
    setUsername("");
    setUsers([]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (username.length <= 0) {
      setUsers([]);
      return;
    }

    if (event.code !== "Enter") {
      return;
    }

    setLoading(true);

    findUsersByUsername({ username })
      .then((data) => setUsers(data.items))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  function handleClear(e) {
    e.preventDefault();

    reset();
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
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
            onKeyUp={(e) => handleSubmit(e)}
          />
          <button className={styles.button} onClick={handleClear}>
            x
          </button>
        </div>
      </div>

      <div className={styles.result}>
        {loading ? <Loader /> : <UsersListing users={users} />}
      </div>
    </div>
  );
}

export default Search;
