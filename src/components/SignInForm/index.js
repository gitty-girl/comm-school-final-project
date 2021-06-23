import { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";

import styles from "./SignInForm.module.css";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();

  function handleSignIn(e) {
    // use async await when handling errors
    e.preventDefault();
    login(username, password);
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.heading}>Please, sign in to continue...</h1>
        <form className={styles.form}>
          <label htmlFor="username" className={styles.formItem}>
            Username
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password" className={styles.formItem}>
            Password
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error !== null && <p className={styles.formError}>{error}</p>}
          <div className={styles.buttons}>
            <Link to={ROUTES.SIGN_UP} className={styles.link}>
              Sign Up
            </Link>

            <button
              type="submit"
              onClick={handleSignIn}
              className={styles.success}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
