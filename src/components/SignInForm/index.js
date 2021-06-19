import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

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

        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
