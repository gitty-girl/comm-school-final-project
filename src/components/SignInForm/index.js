import { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";

import styles from "./SignInForm.module.css";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  function handleSignIn(e) {
    // use async await when handling errors
    e.preventDefault();
    login(username, password);
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <label htmlFor="username" className={styles.formItem}>
          Username
          <input
            type="text"
            id="username"
            name="username"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div>
          <button type="submit" onClick={handleSignIn}>
            Sign In
          </button>

          <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
