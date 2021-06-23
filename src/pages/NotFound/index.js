import React from "react";

import styles from "./NotFound.module.css";

const ERROR_IMAGE = require("../../assets/404.png");

function NotFound() {
  return (
    <div className={styles.errorBox}>
      <img src={ERROR_IMAGE.default} alt="Some error occured." />
      <h2>Oops, something went wrong...</h2>
      <p className={styles.errorText}>Page Not Found</p>
    </div>
  );
}

export default NotFound;
