import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";

import styles from "./SignUpForm.module.css";

import { signUpUser } from "../../api/auth";

import { ROUTES } from "../../constants/routes";

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    password: "",
  });

  const History = useHistory();

  function handleSignUp(e) {
    e.preventDefault();

    signUpUser(user)
      .then(() => {
        History.push(ROUTES.SiGN_IN, { success: "true" });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.heading}>Sign Up Form</h1>
        <form className={styles.form}>
          <label htmlFor="username" className={styles.formItem}>
            Username
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              className={styles.input}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="firstName" className={styles.formItem}>
            First Name
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.input}
              value={user.firstName}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="lastName" className={styles.formItem}>
            Last Name
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.input}
              value={user.lastName}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="email" className={styles.formItem}>
            Email
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="birthDate" className={styles.formItem}>
            Birth Date
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className={styles.input}
              value={user.birthDate}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="password" className={styles.formItem}>
            Password
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>

          <div className={styles.buttons}>
            <Link to={ROUTES.SiGN_IN} className={styles.link}>
              Sign in
            </Link>
            <button
              type="submit"
              onClick={handleSignUp}
              className={styles.success}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
