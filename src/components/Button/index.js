import { useAuth } from "../../context/AuthContext";

import styles from "./Button.module.css";

function Button() {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout} className={styles.danger}>
        Log Out
      </button>
    </div>
  );
}

export default Button;
