import styles from "./FavoriteUser.module.css";

import { useFavorites } from "../../context/FavoritesContext";

import { Names } from "../";

function FavoriteUSer({ user }) {
  const { login, name, avatar_url, html_url } = user;

  const { removeFromFavorites } = useFavorites();

  console.log(user);

  console.log({ name, login, html_url });

  return (
    <div className={styles.item} key={login}>
      <div className={styles.avatar}>
        <img src={avatar_url} alt="User Avatar" />
      </div>

      <Names login={login} name={name} url={html_url} />

      <button
        className={styles.button}
        onClick={() => removeFromFavorites(login)}
      >
        x
      </button>
    </div>
  );
}

export default FavoriteUSer;
