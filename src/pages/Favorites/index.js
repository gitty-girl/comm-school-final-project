import { useFavorites } from "../../context/FavoritesContext";

import { FavoriteUser } from "../../components";

import styles from "./Favorites.module.css";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Favorite Users</h1>
      <div className={styles.favoritesList}>
        {favorites.map((item) => (
          <FavoriteUser user={item} key={item.login} />
        ))}
      </div>
    </section>
  );
}

export default Favorites;
